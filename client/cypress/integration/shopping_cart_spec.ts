describe("Shopping Cart", () => {
  const { baseUrl } = Cypress.config();
  const searchUrl = `${baseUrl}/asset-explorer/search`;

  beforeEach(() => {
    cy.server();
    cy.route({
      url: "/iam/api/v1/users/current-user",
      response: {
        user: {
          createdAt: "2020-01-15T15:25:22.271918Z",
          email: "david@bondhouse.com",
          first: "David",
          id: "auth0|5e1f2ee24d58ca0e75dcbae5",
          institutionId: "adbedc86-e795-4334-b1bd-7cbdf1fbe3bf",
          last: "Inoa",
          terms: true,
          updatedAt: "2020-05-21T17:06:21.669708Z",
          userType: "ADMIN"
        }
      }
    }).as("current-user");

    const mockCart = { cart: { id: "", items: [] } };

    cy.route({
      url: "/apis/rover-preferences/v1/users/*/cart",
      response: mockCart
    }).as("cart");

    cy.route("DELETE", "/apis/rover-preferences/v1/users/*/cart", {
      ok: true
    }).as("delete-cart");
    cy.route(
      "POST",
      "/apis/rover-preferences/v1/users/*/cart/items",
      mockCart
    ).as("post-cart-items");
    cy.route({
      url: "/apis/rover-universe/v1/institutions/*/inventories",
      response: { inventories: [] }
    }).as("rover-inventories");
    cy.route({
      url: "iam/api/v1/institutions/*/inventories",
      response: { inventories: [] }
    }).as("iam-inventories");
    cy.route({
      url: "/apis/rover-preferences/v1/users/*/watchlist",
      response: { watchlist: [] }
    }).as("watchlist");

    cy.route("/apis/rover-universe/v1/assets/*", {
      asset: {
        id: "8caaef7a-197f-4efd-b32d-ee971ff7507d",
        createdAt: "2019-11-22T09:26:45.729635Z",
        updatedAt: "2020-11-01T12:01:04.559270Z",
        updatedBy: "br",
        name: "iShares International Preferred Stock ETF",
        description:
          "The Fund seeks investment results that correspond generally to the price and yield performance of the S&P International Preferred Stock Index. The underlying index measures the performance of a select group of preferred stocks from non-U.S. developed market issuers and traded in non-U.S. developed market venues.",
        price: 13.8584,
        priceDate: "2020-10-29",
        ticker: "IPFF",
        assetType: "fund",
        assetSubtype: "Exchange Traded Funds",
        currency: "USD",
        market: "USA",
        primaryExchange: "BATS ECN - RDFD",
        identifiers: {
          cusip: "46429B135",
          isin: "US46429B1355",
          refinitivLipperId: "40189126",
          refinitivLipperParentId: "36313704",
          apex: "46429B135"
        },
        fund: {
          assetStatus: "Active",
          netAssetsDate: "2020-09-30",
          netAssets: 37824937.38,
          tradeLotSize: 0,
          benchmark: "Lipper Global Mixed Asset USD Conservative",
          inceptionDate: "2011-11-15",
          classification: "Multi Sector",
          fundType: "Exchange Traded Funds",
          allocation: {
            asset: {
              cash: 2.5549,
              equity: 97.443,
              fixedIncome: 0.0021
            },
            currency: {
              sgd: 1.3622,
              other: 0.0005,
              gbp: 8.7148,
              usd: -0.0392,
              cad: 86.7016,
              sek: 3.2601
            },
            debtType: {
              preferredStock: 0.8366
            },
            fixedIncomeCountry: {
              gb: 0.8366
            },
            fixedIncomeRegion: {
              unitedKingdom: 0.8366
            },
            maturity: {
              lessThanOneYear: 0.8366
            },
            rating: {
              nr: 0.8366
            },
            region: {
              asiaPacificExJapan: 1.3622,
              europeExUnitedKingdom: 4.0806,
              northAmericaExUnitedStates: 86.7015,
              unitedKingdom: 7.8944,
              unitedStates: -0.0392,
              other: 0.0006
            }
          },
          priceDate: "2020-10-29",
          midPrice: 13.8584,
          netAssetValuePerShare: 13.91,
          replicationStrategy: "Optimized",
          institutional: false,
          managementCompany: "BlackRock Fund Advisors",
          focus: {
            assetClassFocus: "Bond",
            geoFocus: "Global Ex US"
          },
          fees: {
            managementFee: 0.55,
            marketing12b1Fee: 0,
            fundExpenseRatio: 0.55
          },
          scores: {
            totalReturn: {
              threeYear: 1,
              fiveYear: 1,
              overall: 1
            },
            consistentReturn: {
              threeYear: 1,
              fiveYear: 1,
              overall: 1
            },
            preservation: {
              threeYear: 1,
              fiveYear: 1,
              overall: 1
            },
            expense: {
              threeYear: 4,
              fiveYear: 4,
              overall: 4
            },
            taxEfficiency: {
              threeYear: 5,
              fiveYear: 5,
              overall: 5
            }
          },
          yields: {
            distributionYield: 3.8578577,
            lipperDistributionYield: 3.8817131,
            projectedYield: 4.3480614,
            secYield: 4.21,
            simpleYieldBegin: 4.1663291,
            simpleYieldEnd: 4.4958016,
            thirtyDayYield: 4.21,
            trailingTwelveMonthYield: 4.561656
          },
          distributions: {
            capitalGain: {
              longTermCapitalGain: {
                exDate: "2019-12-02",
                exValue: 0,
                reinvestmentDate: "2019-12-02",
                reinvestmentValue: 14.82,
                reinvestmentType: "Nav",
                paymentDate: "2019-12-06"
              },
              nonQualifiedShortTermCapitalGain: {
                exDate: "2013-12-02",
                exValue: 0.003664,
                reinvestmentDate: "2013-12-02",
                reinvestmentValue: 24.48,
                reinvestmentType: "Nav",
                paymentDate: "2013-12-06"
              },
              qualifiedShortTermCapitalGain: {
                exDate: "2013-12-02",
                exValue: 0.092259,
                reinvestmentDate: "2013-12-02",
                reinvestmentValue: 24.48,
                reinvestmentType: "Nav",
                paymentDate: "2013-12-06"
              },
              shortTermCapitalGain: {
                exDate: "2019-12-02",
                exValue: 0,
                reinvestmentDate: "2019-12-02",
                reinvestmentValue: 14.82,
                reinvestmentType: "Nav",
                paymentDate: "2019-12-06"
              }
            },
            foreignTaxCredit: {
              nonQualifiedForeignTaxPaid: {
                exDate: "2016-12-22",
                exValue: 0.000478,
                reinvestmentDate: "2016-12-22",
                reinvestmentValue: 15.78,
                reinvestmentType: "Nav",
                paymentDate: "2016-12-29"
              },
              qualifiedForeignTaxPaid: {
                exDate: "2018-12-18",
                exValue: 0.004278,
                reinvestmentDate: "2018-12-18",
                reinvestmentValue: 15.27,
                reinvestmentType: "Nav",
                paymentDate: "2018-12-24"
              }
            },
            income: {
              incomeDividend: {
                exDate: "2020-10-01",
                exValue: 0.044719,
                reinvestmentDate: "2020-10-01",
                reinvestmentValue: 13.99,
                reinvestmentType: "Nav",
                paymentDate: "2020-10-07"
              },
              nonQualifiedIncomeDividend: {
                exDate: "2016-12-22",
                exValue: 0.003776,
                reinvestmentDate: "2016-12-22",
                reinvestmentValue: 15.78,
                reinvestmentType: "Nav",
                paymentDate: "2016-12-29"
              },
              qualifiedIncomeDividend: {
                exDate: "2018-12-18",
                exValue: 0.028772,
                reinvestmentDate: "2018-12-18",
                reinvestmentValue: 15.27,
                reinvestmentType: "Nav",
                paymentDate: "2018-12-24"
              }
            }
          }
        },
        analytics: {
          date: "2020-10-30",
          source: "Lipper",
          yield: 4.21,
          distributionYield: 3.8817131,
          secYield: 4.21
        },
        scores: {
          attractiveness: 1,
          credit: 3,
          efficiency: 4.4,
          liquidity: 2,
          risk: 22.53645685561402
        },
        esgScores: {
          timestamp: "2020-11-01T12:01:04.491136Z",
          total: 72,
          environmental: 71,
          social: 68,
          governance: 77
        },
        allocation: {
          country: {
            gb: 0.8366
          },
          currency: {
            sgd: 1.3622,
            other: 0.0005,
            gbp: 8.7148,
            usd: -0.0392,
            cad: 86.7016,
            sek: 3.2601
          },
          maturity: {
            lessThanOneYear: 0.8366
          },
          rating: {
            nr: 0.8366
          },
          region: {
            asiaPacificExJapan: 1.3622,
            europeExUnitedKingdom: 4.0806,
            northAmericaExUnitedStates: 86.7015,
            unitedKingdom: 7.8944,
            unitedStates: -0.0392,
            other: 0.0006
          }
        },
        universes: {
          timestamp: "2020-11-01T12:01:04.559281Z",
          general: true,
          search: true,
          liquid: true
        }
      }
    }).as("assets");
  });

  it("should have a button to export the items in the cart", () => {
    cy.visit(searchUrl);
    cy.waitUntil(() =>
      cy.findByTestId("search-query-input").should("be.enabled")
    );
    cy.get("[data-testid=search-query-input]").type(
      "iShares International Preferred Stock ETF"
    );
    cy.waitUntil(() => cy.findAllByText(/loading/i).should("not.be.visible"));

    cy.findByTestId("AddToCartButton").click();
    cy.waitUntil(() => cy.findAllByText(/loading/i).should("not.be.visible"));

    cy.findByTestId("cart-button").click();
    cy.findByText(/export/i).click();
    cy.findByTestId("delete-all-button").click();

    cy.waitUntil(() => cy.findAllByText(/loading/i).should("not.be.visible"));
    cy.findByText(/browse/i).click();
    cy.findByText("Clear All").click();
    cy.get("[data-testid=search-query-input]").type("hyg");
    cy.waitUntil(() => cy.findAllByText(/loading/i).should("not.be.visible"));
    cy.get(".ag-row").should("be.visible");
    cy.findAllByTestId("AddToCartButton").eq(0).click({ force: true });
    cy.waitUntil(() => cy.findAllByText(/loading/i).should("not.be.visible"));
  });
});
