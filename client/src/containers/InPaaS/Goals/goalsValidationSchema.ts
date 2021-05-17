import * as Yup from "yup";
import Decimal from "../../../util/Decimal";

export const goalsValidationSchema = ({
  minYield,
  maxYield,
  minRisk,
  maxRisk
}: {
  minYield: number;
  maxYield: number;
  minRisk: number;
  maxRisk: number;
}) =>
  Yup.object().shape({
    investmentAmount: Yup.number().test({
      name: "is-defined",
      test(value) {
        if (value !== undefined && (value || 0) < 1_000)
          return this.createError({
            message: "Amount below minimum"
          });
        if (value !== undefined && !Number.isNaN(value)) return true;
        return this.createError({
          message: "Required"
        });
      }
    }),
    targetIncome: Yup.number().when("goal", {
      is: "targetIncome",
      then: Yup.number()
        .required("Required.")
        .typeError("Required")
        .test({
          name: "checking-income",
          test: function test(value) {
            const targetIncome = value || 0;
            const investmentAmount = this.parent.investmentAmount || 0;
            const maxIncome = ((maxYield / 100) * investmentAmount) / 12;
            const minIncome = ((minYield / 100) * investmentAmount) / 12;
            const targetYield =
              Math.round(
                ((targetIncome * 12) / investmentAmount) * 100 * 1_000
              ) / 1_000;
            if (targetYield >= minYield && targetYield <= maxYield) return true;
            if (targetYield > maxYield)
              return this.createError({
                message: `Target income must be $${Decimal.format(
                  maxIncome
                )} or less.`
              });
            return this.createError({
              message: `Target income must be $${Decimal.format(
                minIncome
              )} or more.`
            });
          }
        })
    }),
    targetYield: Yup.number().when("goal", {
      is: "targetYield",
      then: Yup.number()
        .required("Required.")
        .typeError("Required")
        .strict(true)
        .test({
          name: "checking-yield",
          test: function test(value) {
            const targetYield = Math.round((value || 0) * 1_000) / 1_000;
            if (targetYield >= minYield && targetYield <= maxYield) return true;
            if (targetYield > maxYield)
              return this.createError({
                message: `Target yield must be ${maxYield}% or less.`
              });
            return this.createError({
              message: `Target yield must be ${minYield}% or more.`
            });
          }
        })
    }),
    targetRisk: Yup.number().when("goal", {
      is: "targetRisk",
      then: Yup.number()
        .required("Required.")
        .typeError("Required")
        .strict(true)
        .test({
          name: "checking-risk",
          test: function test(value) {
            const targetRisk = parseFloat(value.toFixed(3));
            if (targetRisk >= minRisk && targetRisk <= maxRisk) return true;
            if (targetRisk > maxRisk)
              return this.createError({
                message: `Target risk must be ${maxRisk}% or less.`
              });
            return this.createError({
              message: `Target risk must be ${minRisk}% or more.`
            });
          }
        })
    }),
    minimumWeight: Yup.number()
      .required("Required.")
      .typeError("Required")
      .test({
        name: "checking-min-weight",
        test: function test(value) {
          const minimumWeight = value || 0;
          if (Number.isNaN(minimumWeight))
            return this.createError({
              message: "Must be a number"
            });
          const maximumWeight = this.parent.maximumWeight || 0;
          if (this.parent.maximumWeight && minimumWeight >= maximumWeight)
            return this.createError({
              message: `Minimum must be lower than maximum`
            });
          if (value === undefined) return true;
          if (minimumWeight >= 5 || !value) return true;
          return this.createError({
            message: `${minimumWeight}% is too low.`
          });
        }
      }),
    maximumWeight: Yup.number()
      .required("Required.")
      .typeError("Required")
      .test({
        name: "checking-max-weight",
        test: function test(value) {
          const maximumWeight = value || 0;
          if (Number.isNaN(maximumWeight))
            return this.createError({
              message: "Must be a number"
            });
          const minimumWeight = this.parent.minimumWeight || 0;
          if (value === undefined) return true;
          if (maximumWeight < 1)
            return this.createError({
              message: "Must be greater than 0"
            });
          if (maximumWeight <= minimumWeight)
            return this.createError({
              message: `Maximum must be greater than minimum`
            });

          if (maximumWeight <= 30) return true;
          return this.createError({
            message: `${maximumWeight}% is too high.`
          });
        }
      })
  });
