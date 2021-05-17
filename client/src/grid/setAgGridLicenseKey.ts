import { LicenseManager } from "@ag-grid-enterprise/core";

export const AgGridLicenseKey =
  "CompanyName=BondHouse,LicensedApplication=BondHouse,LicenseType=SingleApplication,LicensedConcurrentDeveloperCount=1,LicensedProductionInstancesCount=1,AssetReference=AG-008510,ExpiryDate=12_June_2021_[v2]_MTYyMzQ1MjQwMDAwMA==578ff874903b4059dc76d46a9b956045";
LicenseManager.setLicenseKey(AgGridLicenseKey);

// import "@ag-grid-community/all-modules/dist/styles/ag-theme-alpine-dark.css";
// import "@ag-grid-community/all-modules/dist/styles/ag-grid.css";

// export default function setAgGridLicenseKey(): void {
//   LicenseManager.setLicenseKey(AgGridLicenseKey);
//   import("./style.scss");
// }
