const SAMPLE_INPUT_CASE_111 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000002",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2022,
    "lossPots": {
      "2022": 0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0003697080",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 0.2,
      "accountGroupId": "IT000002",
      "fee": 0,
      "transactionTimestamp": "2022-04-30T01:00:00+00:00",
      "valueDate": "2022-05-02"
    },
    {
      "triggerReference": "2",
      "isin": "IT0003697080",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 0.313,
      "accountGroupId": "IT000002",
      "fee": 0,
      "transactionTimestamp": "2022-06-18T01:00:00+00:00",
      "valueDate": "2022-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0003697080",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_112 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000002",
    "taxRegime": "DICHIARATIVO"
  },
  "clientInitialState": {
    "year": 2022,
    "lossPots": {
      "2022": 0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0003697080",
      "accountGroupId": "IT000002",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 0.2,
      "fee": 0,
      "transactionTimestamp": "2022-04-30T01:00:00+00:00",
      "valueDate": "2022-05-02"
    },
    {
      "triggerReference": "2",
      "isin": "IT0003697080",
      "accountGroupId": "IT000002",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 0.313,
      "fee": 0,
      "transactionTimestamp": "2022-06-18T01:00:00+00:00",
      "valueDate": "2022-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0003697080",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_121 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000003",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {
      "2024": 0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00B4K48X80",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 50.0,
      "fee": 0,
      "transactionTimestamp": "2022-04-30T01:00:00+00:00",
      "valueDate": "2024-05-02"
    },
    {
      "triggerReference": "2",
      "isin": "IE00B4K48X80",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 100.0,
      "fee": 0,
      "transactionTimestamp": "2022-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B4K48X80",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_122 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000004",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {
      "2024": 0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00B4WXJJ64",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 50.0,
      "fee": 0,
      "transactionTimestamp": "2024-04-30T01:00:00+00:00",
      "valueDate": "2024-05-02"
    },
    {
      "triggerReference": "2",
      "isin": "IE00B4WXJJ64",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 100.0,
      "fee": 0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B4WXJJ64",
      "instrumentType": "ETF_UCITS",
      "countryOfOrigin": "IE",
      "bankAssetType": "ETF",
      "productType": "INVESTMENT_FUNDS",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "fttRelevance": "NONE"
    }
  ],
  "fundTaxData": [
    {
      "isin": "IE00B4WXJJ64",
      "validFrom": "2024-01-01",
      "validTo": "2025-12-31",
      "irrp": 1
    }
  ]
}`;

const SAMPLE_INPUT_CASE_123 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000005",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {
      "2025": 0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00BMVB5N38",
      "eventType": "INSTRUMENT_BUY",
      "accountGroupId": "IT000005",
      "quantity": 10,
      "unitPrice": 50.0,
      "fee": 0,
      "transactionTimestamp": "2026-01-15T01:00:00+00:00",
      "valueDate": "2026-01-17"
    },
    {
      "triggerReference": "2",
      "isin": "IE00BMVB5N38",
      "eventType": "INSTRUMENT_SELL",
      "accountGroupId": "IT000005",
      "quantity": 10,
      "unitPrice": 100.0,
      "fee": 0,
      "transactionTimestamp": "2026-03-10T01:00:00+00:00",
      "valueDate": "2026-03-12"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00BMVB5N38",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ],
  "fundTaxData": [
    {
      "isin": "IE00BMVB5N38",
      "validFrom": "2026-01-01",
      "validTo": "2026-06-30",
      "irrp": 0.3347
    }
  ]
}`;

const SAMPLE_INPUT_CASE_124 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000080",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {
      "2025": 0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00BMVB5N38",
      "eventType": "INSTRUMENT_BUY",
      "accountGroupId": "IT000080",
      "quantity": 100,
      "unitPrice": 50.0,
      "fee": 0,
      "transactionTimestamp": "2025-06-16T01:00:00+00:00",
      "valueDate": "2025-06-18"
    },
    {
      "triggerReference": "2",
      "isin": "IE00BMVB5N38",
      "eventType": "INSTRUMENT_SELL",
      "accountGroupId": "IT000080",
      "quantity": 30,
      "unitPrice": 52.0,
      "fee": 0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    },
    {
      "triggerReference": "3",
      "isin": "IE00BMVB5N38",
      "eventType": "INSTRUMENT_SELL",
      "accountGroupId": "IT000080",
      "quantity": 40,
      "unitPrice": 55.0,
      "fee": 0,
      "transactionTimestamp": "2026-06-30T01:00:00+00:00",
      "valueDate": "2026-07-02"
    },
    {
      "triggerReference": "4",
      "isin": "IE00BMVB5N38",
      "eventType": "INSTRUMENT_SELL",
      "accountGroupId": "IT000080",
      "quantity": 30,
      "unitPrice": 53.0,
      "fee": 0,
      "transactionTimestamp": "2026-07-12T01:00:00+00:00",
      "valueDate": "2026-07-14"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00BMVB5N38",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE"
    }
  ],
  "fundTaxData": [
    {
      "isin": "IE00BMVB5N38",
      "validFrom": "2025-06-02",
      "validTo": "2025-12-31",
      "irrp": 0.3347
    },
    {
      "isin": "IE00BMVB5N38",
      "validFrom": "2026-01-01",
      "validTo": "2026-12-31",
      "irrp": 0.3
    }
  ]
}`;

const SAMPLE_INPUT_CASE_125 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000009",
    "taxRegime": "DICHIARATIVO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {
      "2024": 0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00B4K48X80",
      "eventType": "INSTRUMENT_BUY",
      "accountGroupId": "IT000009",
      "quantity": 10,
      "unitPrice": 50.0,
      "fee": 0,
      "transactionTimestamp": "2024-04-30T01:00:00+00:00",
      "valueDate": "2024-05-02"
    },
    {
      "triggerReference": "2",
      "isin": "IE00B4K48X80",
      "eventType": "INSTRUMENT_SELL",
      "accountGroupId": "IT000009",
      "quantity": 10,
      "unitPrice": 100.0,
      "fee": 0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B4K48X80",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_126 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000009",
    "taxRegime": "DICHIARATIVO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {
      "2025": 0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00B0M62Q58",
      "eventType": "INSTRUMENT_BUY",
      "accountGroupId": "IT000009",
      "quantity": 1000,
      "unitPrice": 50.0,
      "fee": 5.0,
      "transactionTimestamp": "2025-01-08T01:00:00+00:00",
      "valueDate": "2025-01-10"
    },
    {
      "triggerReference": "2",
      "isin": "IE00B0M62Q58",
      "eventType": "CA_DISTRIBUTIONS",
      "accountGroupId": "IT000009",
      "grossAmount": 1000.0,
      "transactionTimestamp": "2025-05-13T01:00:00+00:00",
      "valueDate": "2025-05-15"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B0M62Q58",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_211 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000008",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000008",
      "fee": 0,
      "transactionTimestamp": "2023-12-30T03:00:00+00:00",
      "valueDate": "2024-01-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 50.0,
      "accountGroupId": "IT000008",
      "fee": 0,
      "transactionTimestamp": "2023-12-31T03:00:00+00:00",
      "valueDate": "2024-01-02",
      "comment": "This creates a loss pot of 500.00 EUR for FY 2024."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000008",
      "fee": 0,
      "transactionTimestamp": "2024-05-29T01:00:00+00:00",
      "valueDate": "2024-06-01"
    },
    {
      "triggerReference": "4",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1,
      "unitPrice": 1000.0,
      "accountGroupId": "IT000008",
      "fee": 0,
      "transactionTimestamp": "2024-06-29T01:00:00+00:00",
      "valueDate": "2024-07-01"
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 130.0,
      "accountGroupId": "IT000008",
      "fee": 0,
      "transactionTimestamp": "2025-05-29T03:00:00+00:00",
      "valueDate": "2025-06-01",
      "comment": "Decreases loss pot from 500 to 200."
    },
    {
      "triggerReference": "6",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1,
      "unitPrice": 1400.0,
      "accountGroupId": "IT000008",
      "fee": 0,
      "transactionTimestamp": "2025-06-29T09:00:00+00:00",
      "valueDate": "2025-07-01",
      "comment": "Reduces loss pot from 200 to 0. The remaining 200 EUR is tax base."
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    },
    {
      "isin": "DE000VM4L3W6",
      "bankAssetType": "ZFK",
      "productType": "WARRANTS",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_212 = `{
  "clientData": {
    "accountGroupId": "IT000009",
    "countryOfTaxResidency": "IT",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000009",
      "fee": 0,
      "transactionTimestamp": "2023-12-30T03:00:00+00:00",
      "valueDate": "2024-01-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 50.0,
      "accountGroupId": "IT000009",
      "fee": 0,
      "transactionTimestamp": "2023-12-31T03:00:00+00:00",
      "valueDate": "2024-01-02",
      "comment": "This creates a loss pot of 500.00 EUR for FY 2024."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 100.0,
      "quantity": 10,
      "accountGroupId": "IT000009",
      "fee": 0,
      "transactionTimestamp": "2024-04-29T01:00:00+00:00",
      "valueDate": "2024-05-01"
    },
    {
      "triggerReference": "4",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 1000.0,
      "quantity": 1,
      "accountGroupId": "IT000009",
      "fee": 0,
      "transactionTimestamp": "2024-05-30T01:00:00+00:00",
      "valueDate": "2024-06-01"
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 115.0,
      "quantity": 10,
      "accountGroupId": "IT000009",
      "fee": 0,
      "transactionTimestamp": "2025-05-08T01:00:00+00:00",
      "valueDate": "2025-05-10",
      "comment": "Reduces loss pot from 500 to 350."
    },
    {
      "triggerReference": "6",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 1100.0,
      "quantity": 1,
      "accountGroupId": "IT000009",
      "fee": 0,
      "transactionTimestamp": "2025-05-30T01:00:00+00:00",
      "valueDate": "2025-06-01",
      "comment": "Reduces loss pot from 350 to 250."
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    },
    {
      "isin": "DE000VM4L3W6",
      "bankAssetType": "ZFK",
      "productType": "WARRANTS",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_213 = `{
  "clientData": {
    "accountGroupId": "IT000010",
    "countryOfTaxResidency": "IT",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2020,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 7,
      "unitPrice": 100.0,
      "accountGroupId": "IT000010",
      "fee": 0,
      "transactionTimestamp": "2019-12-30T03:00:00+00:00",
      "valueDate": "2020-01-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 7,
      "unitPrice": 50.0,
      "accountGroupId": "IT000010",
      "fee": 0,
      "transactionTimestamp": "2019-12-31T03:00:00+00:00",
      "valueDate": "2020-01-02",
      "comment": "This creates a loss pot of 350.00 EUR for FY 2020."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 100.0,
      "quantity": 10,
      "accountGroupId": "IT000010",
      "fee": 0,
      "transactionTimestamp": "2025-05-18T01:00:00+00:00",
      "valueDate": "2025-05-20"
    },
    {
      "triggerReference": "4",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 1000.0,
      "quantity": 1,
      "accountGroupId": "IT000010",
      "fee": 0,
      "transactionTimestamp": "2025-05-30T01:00:00+00:00",
      "valueDate": "2025-06-01"
    },
    {
      "triggerReference": "5",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 1300.0,
      "quantity": 1,
      "accountGroupId": "IT000010",
      "fee": 0,
      "transactionTimestamp": "2025-09-08T01:00:00+00:00",
      "valueDate": "2025-09-10"
    },
    {
      "triggerReference": "6",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 120.0,
      "quantity": 10,
      "accountGroupId": "IT000010",
      "fee": 0,
      "transactionTimestamp": "2025-10-18T01:00:00+00:00",
      "valueDate": "2025-10-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    },
    {
      "isin": "DE000VM4L3W6",
      "bankAssetType": "ZFK",
      "productType": "WARRANTS",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_214 = `{
  "clientData": {
    "accountGroupId": "IT000011",
    "countryOfTaxResidency": "IT",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2020,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 30,
      "unitPrice": 100.0,
      "accountGroupId": "IT000011",
      "fee": 0,
      "transactionTimestamp": "2019-12-30T03:00:00+00:00",
      "valueDate": "2020-01-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 75.0,
      "accountGroupId": "IT000011",
      "fee": 0,
      "transactionTimestamp": "2019-12-31T03:00:00+00:00",
      "valueDate": "2020-01-02",
      "comment": "This creates a loss pot of 250.00 EUR for FY 2020."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 80.0,
      "accountGroupId": "IT000011",
      "fee": 0,
      "transactionTimestamp": "2021-12-31T03:00:00+00:00",
      "valueDate": "2022-01-02",
      "comment": "This creates a loss pot of 200.00 EUR for FY 2022."
    },
    {
      "triggerReference": "4",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 75.0,
      "accountGroupId": "IT000011",
      "fee": 0,
      "transactionTimestamp": "2022-12-31T03:00:00+00:00",
      "valueDate": "2023-01-02",
      "comment": "This creates a loss pot of 250.00 EUR for FY 2023."
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 100.0,
      "quantity": 10,
      "accountGroupId": "IT000011",
      "fee": 0,
      "transactionTimestamp": "2025-03-15T01:00:00+00:00",
      "valueDate": "2025-03-15"
    },
    {
      "triggerReference": "6",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 1000.0,
      "quantity": 1,
      "accountGroupId": "IT000011",
      "fee": 0,
      "transactionTimestamp": "2025-04-08T01:00:00+00:00",
      "valueDate": "2025-04-10"
    },
    {
      "triggerReference": "7",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 130.0,
      "quantity": 10,
      "accountGroupId": "IT000011",
      "fee": 0,
      "transactionTimestamp": "2025-09-18T01:00:00+00:00",
      "valueDate": "2025-09-20"
    },
    {
      "triggerReference": "8",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 1200.0,
      "quantity": 1,
      "accountGroupId": "IT000011",
      "fee": 0,
      "transactionTimestamp": "2025-10-28T01:00:00+00:00",
      "valueDate": "2025-10-30"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    },
    {
      "isin": "DE000VM4L3W6",
      "bankAssetType": "ZFK",
      "productType": "WARRANTS",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_215 = `{
  "clientData": {
    "accountGroupId": "IT000012",
    "countryOfTaxResidency": "IT",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2021,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 30,
      "unitPrice": 100.0,
      "accountGroupId": "IT000012",
      "fee": 0,
      "transactionTimestamp": "2020-12-30T03:00:00+00:00",
      "valueDate": "2021-01-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 85.0,
      "accountGroupId": "IT000012",
      "fee": 0,
      "transactionTimestamp": "2020-12-31T03:00:00+00:00",
      "valueDate": "2021-01-02",
      "comment": "This creates a loss pot of 150.00 EUR for FY 2021."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 90.0,
      "accountGroupId": "IT000012",
      "fee": 0,
      "transactionTimestamp": "2021-12-31T03:00:00+00:00",
      "valueDate": "2022-01-02",
      "comment": "This creates a loss pot of 100.00 EUR for FY 2022."
    },
    {
      "triggerReference": "4",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 55.0,
      "accountGroupId": "IT000012",
      "fee": 0,
      "transactionTimestamp": "2022-12-31T03:00:00+00:00",
      "valueDate": "2023-01-02",
      "comment": "This creates a loss pot of 450.00 EUR for FY 2023."
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 100.0,
      "quantity": 10,
      "accountGroupId": "IT000012",
      "fee": 0,
      "transactionTimestamp": "2025-02-13T01:00:00+00:00",
      "valueDate": "2025-02-15"
    },
    {
      "triggerReference": "6",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 1000.0,
      "quantity": 1,
      "accountGroupId": "IT000012",
      "fee": 0,
      "transactionTimestamp": "2025-02-27T01:00:00+00:00",
      "valueDate": "2025-03-01"
    },
    {
      "triggerReference": "7",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 150.0,
      "quantity": 10,
      "accountGroupId": "IT000012",
      "fee": 0,
      "transactionTimestamp": "2025-09-13T01:00:00+00:00",
      "valueDate": "2025-09-15"
    },
    {
      "triggerReference": "8",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 1250.0,
      "quantity": 1,
      "accountGroupId": "IT000012",
      "fee": 0,
      "transactionTimestamp": "2025-09-29T01:00:00+00:00",
      "valueDate": "2025-10-01"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    },
    {
      "isin": "DE000VM4L3W6",
      "bankAssetType": "ZFK",
      "productType": "WARRANTS",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_216 = `{
  "clientData": {
    "accountGroupId": "IT000021",
    "countryOfTaxResidency": "IT",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 1000.0,
      "quantity": 1,
      "accountGroupId": "IT000021",
      "fee": 0,
      "transactionTimestamp": "2024-06-13T01:00:00+00:00",
      "valueDate": "2024-06-15"
    },
    {
      "triggerReference": "2",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 400.0,
      "quantity": 1,
      "accountGroupId": "IT000021",
      "fee": 0,
      "transactionTimestamp": "2024-09-18T01:00:00+00:00",
      "valueDate": "2024-09-20"
    },
    {
      "triggerReference": "3",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_BUY",
      "unitPrice": 1000.0,
      "quantity": 1,
      "accountGroupId": "IT000021",
      "fee": 0,
      "transactionTimestamp": "2025-05-08T01:00:00+00:00",
      "valueDate": "2025-05-10"
    },
    {
      "triggerReference": "4",
      "isin": "DE000VM4L3W6",
      "eventType": "INSTRUMENT_SELL",
      "unitPrice": 1400.0,
      "quantity": 1,
      "accountGroupId": "IT000021",
      "fee": 0,
      "transactionTimestamp": "2025-09-28T01:00:00+00:00",
      "valueDate": "2025-09-30"
    }
  ],
  "securityMasterData": [
    {
      "isin": "DE000VM4L3W6",
      "bankAssetType": "ZFK",
      "productType": "WARRANTS",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_221 = `{
  "clientData": {
    "accountGroupId": "IT000015",
    "countryOfTaxResidency": "IT",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000015",
      "fee": 0,
      "transactionTimestamp": "2024-01-05T03:00:00+00:00",
      "valueDate": "2024-01-07"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 80.0,
      "accountGroupId": "IT000015",
      "fee": 0,
      "transactionTimestamp": "2024-01-06T03:00:00+00:00",
      "valueDate": "2024-01-08",
      "comment": "This creates a loss pot of 200.00 EUR for FY 2024."
    },
    {
      "triggerReference": "3",
      "isin": "IE00B4L5Y983",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 50.0,
      "accountGroupId": "IT000015",
      "fee": 0,
      "transactionTimestamp": "2024-04-30T01:00:00+00:00",
      "valueDate": "2024-05-02"
    },
    {
      "triggerReference": "4",
      "isin": "IE00B4L5Y983",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000015",
      "fee": 0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B4L5Y983",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "YES",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    },
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_222 = `{
  "clientData": {
    "accountGroupId": "IT000016",
    "countryOfTaxResidency": "IT",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000016",
      "fee": 0,
      "transactionTimestamp": "2024-01-05T03:00:00+00:00",
      "valueDate": "2024-01-07"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 80.0,
      "accountGroupId": "IT000016",
      "fee": 0,
      "transactionTimestamp": "2024-01-06T03:00:00+00:00",
      "valueDate": "2024-01-08",
      "comment": "This creates a loss pot of 200.00 EUR for FY 2024."
    },
    {
      "triggerReference": "3",
      "isin": "IE00B5BMR087",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 50.0,
      "accountGroupId": "IT000016",
      "fee": 0,
      "transactionTimestamp": "2024-04-30T01:00:00+00:00",
      "valueDate": "2024-05-02"
    },
    {
      "triggerReference": "4",
      "isin": "IE00B5BMR087",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000016",
      "fee": 0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B5BMR087",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "YES",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    },
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_223 = `{
  "clientData": {
    "accountGroupId": "IT000017",
    "countryOfTaxResidency": "IT",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00B5BMR087",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000017",
      "fee": 0,
      "transactionTimestamp": "2024-04-30T01:00:00+00:00",
      "valueDate": "2024-05-02"
    },
    {
      "triggerReference": "2",
      "isin": "IE00B5BMR087",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 50.0,
      "accountGroupId": "IT000017",
      "fee": 0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B5BMR087",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "YES",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_224 = `{
  "clientData": {
    "accountGroupId": "IT000018",
    "countryOfTaxResidency": "IT",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000018",
      "fee": 0,
      "transactionTimestamp": "2024-01-05T03:00:00+00:00",
      "valueDate": "2024-01-07"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 70.0,
      "accountGroupId": "IT000018",
      "fee": 0,
      "transactionTimestamp": "2024-01-06T03:00:00+00:00",
      "valueDate": "2024-01-08",
      "comment": "This creates a loss pot of 300.00 EUR for FY 2024."
    },
    {
      "triggerReference": "3",
      "isin": "IE00B5BMR087",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000018",
      "fee": 0,
      "transactionTimestamp": "2024-04-30T01:00:00+00:00",
      "valueDate": "2024-05-02"
    },
    {
      "triggerReference": "4",
      "isin": "IE00B5BMR087",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 80.0,
      "accountGroupId": "IT000018",
      "fee": 0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B5BMR087",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "YES",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    },
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_311 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000030",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {
      "2024": 0.0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000030",
      "fee": 0,
      "transactionTimestamp": "2024-12-31T01:01:00+00:00",
      "valueDate": "2024-01-02"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 97.999,
      "accountGroupId": "IT000030",
      "fee": 0,
      "transactionTimestamp": "2025-01-01T01:00:00+00:00",
      "valueDate": "2024-01-03",
      "comment": "Creates loss pot of 20.01 EUR"
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000030",
      "fee": 0,
      "transactionTimestamp": "2024-01-08T01:00:00+00:00",
      "valueDate": "2024-01-10"
    },
    {
      "triggerReference": "4",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000030",
      "fee": 0,
      "transactionTimestamp": "2024-01-08T01:01:00+00:00",
      "valueDate": "2024-01-10"
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 101.0014,
      "accountGroupId": "IT000030",
      "fee": 0,
      "transactionTimestamp": "2025-02-08T01:00:00+00:00",
      "valueDate": "2025-02-10",
      "comment": "Reduces loss pot from 20.01 to 10.00 EUR"
    },
    {
      "triggerReference": "6",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 101.0014,
      "accountGroupId": "IT000030",
      "fee": 0,
      "transactionTimestamp": "2025-02-08T02:00:00+00:00",
      "valueDate": "2025-02-10",
      "comment": "Reduces loss pot from 10.00 to 0.00 EUR; Taxable base: 0.01 EUR"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_312 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000031",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {
      "2024": 0.0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 400,
      "unitPrice": 100.0,
      "accountGroupId": "IT000031",
      "fee": 0,
      "transactionTimestamp": "2023-12-30T11:00:00+00:00",
      "valueDate": "2024-01-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 91.0,
      "accountGroupId": "IT000031",
      "fee": 0,
      "transactionTimestamp": "2024-01-01T11:00:00+00:00",
      "valueDate": "2024-01-03",
      "comment": "Increase loss pot to 900.00 EUR."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 102.0,
      "accountGroupId": "IT000031",
      "fee": 0,
      "transactionTimestamp": "2025-03-13T11:01:00+00:00",
      "valueDate": "2025-03-15",
      "comment": "Reduce loss pot to 700.00 EUR."
    },
    {
      "triggerReference": "4",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 104.00,
      "accountGroupId": "IT000031",
      "fee": 0,
      "transactionTimestamp": "2025-03-13T11:02:00+00:00",
      "valueDate": "2025-03-15",
      "comment": "Reduce loss pot to 300.00 EUR."
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 107.00,
      "accountGroupId": "IT000031",
      "fee": 0,
      "transactionTimestamp": "2025-03-13T11:03:00+00:00",
      "valueDate": "2025-03-15",
      "comment": "Reduce loss pot to 0 EUR. Taxable amount: 400 EUR."
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_313 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000032",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 2,
      "unitPrice": 10.0,
      "accountGroupId": "IT000032",
      "fee": 0,
      "transactionTimestamp": "2024-03-30T11:00:00+00:00",
      "valueDate": "2024-04-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1,
      "unitPrice": 9.9960,
      "accountGroupId": "IT000032",
      "fee": 0,
      "transactionTimestamp": "2025-04-08T11:01:00+00:00",
      "valueDate": "2025-04-10",
      "comment": "Rounding results in 0.00 EUR PnL. Loss pot remains zero."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1,
      "unitPrice": 9.9950,
      "accountGroupId": "IT000032",
      "fee": 0,
      "transactionTimestamp": "2025-04-08T11:02:00+00:00",
      "valueDate": "2025-04-10",
      "comment": "Rounding results in 0.01 EUR PnL. New loss pot: -0.01 EUR"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_314 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000033",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {
      "2024": 0.0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 20,
      "unitPrice": 100.0,
      "accountGroupId": "IT000033",
      "fee": 0,
      "transactionTimestamp": "2024-03-30T11:00:00+00:00",
      "valueDate": "2024-04-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 20,
      "unitPrice": 96.50,
      "accountGroupId": "IT000033",
      "fee": 0,
      "transactionTimestamp": "2024-04-01T11:01:00+00:00",
      "valueDate": "2024-04-03",
      "comment": "Increase loss pot to 70.00 EUR."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 20,
      "unitPrice": 100.0,
      "accountGroupId": "IT000033",
      "fee": 0,
      "transactionTimestamp": "2024-12-30T11:00:00+00:00",
      "valueDate": "2025-01-01"
    },
    {
      "triggerReference": "4",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 102.0,
      "accountGroupId": "IT000033",
      "fee": 0,
      "transactionTimestamp": "2025-05-08T11:01:00+00:00",
      "valueDate": "2025-05-10",
      "comment": "Reduce loss pot to 50.00 EUR."
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 106.0,
      "accountGroupId": "IT000033",
      "fee": 0,
      "transactionTimestamp": "2025-05-08T11:02:00+00:00",
      "valueDate": "2025-05-10",
      "comment": "Reduce loss pot to zero. Taxable gain: 10.00 EUR."
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_315 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000034",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {
      "2025": 0.0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 50,
      "unitPrice": 100.0,
      "accountGroupId": "IT000034",
      "fee": 0,
      "transactionTimestamp": "2024-12-30T11:00:00+00:00",
      "valueDate": "2025-01-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 90.0,
      "accountGroupId": "IT000034",
      "fee": 0,
      "transactionTimestamp": "2025-02-08T11:01:00+00:00",
      "valueDate": "2025-02-10",
      "comment": "Create a loss pot of 100.00 EUR."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 108.0,
      "accountGroupId": "IT000034",
      "fee": 0,
      "transactionTimestamp": "2025-05-08T11:01:00+00:00",
      "valueDate": "2025-06-10",
      "comment": "Reduce loss pot to 20.00 EUR."
    },
    {
      "triggerReference": "4",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 95.0,
      "accountGroupId": "IT000034",
      "fee": 0,
      "transactionTimestamp": "2025-05-08T11:02:00+00:00",
      "valueDate": "2025-06-10",
      "comment": "Increase loss pot to 70.00 EUR."
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 106.0,
      "accountGroupId": "IT000034",
      "fee": 0,
      "transactionTimestamp": "2025-05-08T11:03:00+00:00",
      "valueDate": "2025-06-10",
      "comment": "Reduce loss pot to 10.00 EUR."
    },
    {
      "triggerReference": "6",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 103.0,
      "accountGroupId": "IT000034",
      "fee": 0,
      "transactionTimestamp": "2025-05-08T11:04:00+00:00",
      "valueDate": "2025-06-10",
      "comment": "Reduce loss pot to zero. Taxable amount: 20.00 EUR"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_316 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000035",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {
      "2024": 0.0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 300.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2024-03-01T11:00:00+00:00",
      "valueDate": "2024-03-03"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 270.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2024-04-01T11:00:00+00:00",
      "valueDate": "2024-04-03",
      "comment": "Increase loss pot to 300 EUR."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1,
      "unitPrice": 100.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2025-07-01T11:00:00+00:00",
      "valueDate": "2025-07-03"
    },
    {
      "triggerReference": "4",
      "isin": "IT0003115950",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1,
      "unitPrice": 100.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2025-07-01T11:00:00+00:00",
      "valueDate": "2025-07-03"
    },
    {
      "triggerReference": "5",
      "isin": "IT0005037210",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1,
      "unitPrice": 100.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2025-07-01T11:00:00+00:00",
      "valueDate": "2025-07-03"
    },
    {
      "triggerReference": "6",
      "isin": "IT0005273567",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1,
      "unitPrice": 100.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2025-07-01T11:00:00+00:00",
      "valueDate": "2025-07-03"
    },
    {
      "triggerReference": "7",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1,
      "unitPrice": 250.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2025-07-03T11:01:00+00:00",
      "valueDate": "2025-07-05",
      "comment": "Reduce loss pot to 150.00 EUR."
    },
    {
      "triggerReference": "8",
      "isin": "IT0003115950",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1,
      "unitPrice": 180.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2025-07-03T11:02:00+00:00",
      "valueDate": "2025-07-05",
      "comment": "Reduce loss pot to 70.00 EUR."
    },
    {
      "triggerReference": "9",
      "isin": "IT0005037210",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1,
      "unitPrice": 150.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2025-07-03T11:03:00+00:00",
      "valueDate": "2025-07-05",
      "comment": "Reduce loss pot to 20.00 EUR."
    },
    {
      "triggerReference": "10",
      "isin": "IT0005273567",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1,
      "unitPrice": 125.0,
      "accountGroupId": "IT000035",
      "fee": 0,
      "transactionTimestamp": "2025-07-03T11:04:00+00:00",
      "valueDate": "2025-07-05",
      "comment": "Reduce loss pot to zero. Taxable gain: 5.00 EUR"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    },
    {
      "isin": "IT0003115950",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    },
    {
      "isin": "IT0005037210",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    },
    {
      "isin": "IT0005273567",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_321 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000036",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {
      "2024": 0.0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 10.0,
      "accountGroupId": "IT000036",
      "fee": 0,
      "transactionTimestamp": "2024-09-01T01:00:00+00:00",
      "valueDate": "2024-09-03"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 8.50,
      "accountGroupId": "IT000036",
      "fee": 0,
      "transactionTimestamp": "2024-09-03T01:00:00+00:00",
      "valueDate": "2024-09-05",
      "comment": "Increase loss pot to 150 EUR for FY 2024."
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 10.0,
      "accountGroupId": "IT000036",
      "fee": 0,
      "transactionTimestamp": "2025-09-08T01:00:00+00:00",
      "valueDate": "2025-09-10"
    },
    {
      "triggerReference": "4",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 50,
      "unitPrice": 11.20,
      "accountGroupId": "IT000036",
      "fee": 0,
      "transactionTimestamp": "2025-09-08T01:01:00+00:00",
      "valueDate": "2025-09-10"
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 80,
      "unitPrice": 12.10,
      "accountGroupId": "IT000036",
      "fee": 0,
      "transactionTimestamp": "2025-09-08T01:02:00+00:00",
      "valueDate": "2025-09-10"
    },
    {
      "triggerReference": "6",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 40,
      "unitPrice": 9.90,
      "accountGroupId": "IT000036",
      "fee": 0,
      "transactionTimestamp": "2025-09-08T01:03:00+00:00",
      "valueDate": "2025-09-10"
    },
    {
      "triggerReference": "7",
      "eventType": "REVERSAL",
      "correctedTriggerReference": "6",
      "transactionTimestamp": "2025-09-10T01:04:00+00:00",
      "valueDate": "2025-09-10"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_322 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000040",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {
      "2024": 0.0
    }
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 10.0,
      "accountGroupId": "IT000040",
      "fee": 0,
      "transactionTimestamp": "2024-09-01T01:00:00+00:00",
      "valueDate": "2024-09-03"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 9.20,
      "accountGroupId": "IT000040",
      "fee": 0,
      "transactionTimestamp": "2024-09-03T01:01:00+00:00",
      "valueDate": "2024-09-05"
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 10.137845,
      "accountGroupId": "IT000040",
      "fee": 0,
      "transactionTimestamp": "2025-09-29T01:00:00+00:00",
      "valueDate": "2025-10-01"
    },
    {
      "triggerReference": "4",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 75,
      "unitPrice": 10.274501,
      "accountGroupId": "IT000040",
      "fee": 0,
      "transactionTimestamp": "2025-09-30T01:01:00+00:00",
      "valueDate": "2025-10-02"
    },
    {
      "triggerReference": "5",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 130,
      "unitPrice": 9.941327,
      "accountGroupId": "IT000040",
      "fee": 0,
      "transactionTimestamp": "2025-10-01T01:00:00+00:00",
      "valueDate": "2025-10-03"
    },
    {
      "triggerReference": "6",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 95,
      "unitPrice": 10.089712,
      "accountGroupId": "IT000040",
      "fee": 0,
      "transactionTimestamp": "2025-10-02T01:01:00+00:00",
      "valueDate": "2025-10-04"
    },
    {
      "triggerReference": "7",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 160,
      "unitPrice": 10.87,
      "accountGroupId": "IT000040",
      "fee": 0,
      "transactionTimestamp": "2025-10-03T01:02:00+00:00",
      "valueDate": "2025-10-05"
    },
    {
      "triggerReference": "8",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 90,
      "unitPrice": 9.98,
      "accountGroupId": "IT000040",
      "fee": 0,
      "transactionTimestamp": "2025-10-03T01:03:00+00:00",
      "valueDate": "2025-10-05"
    },
    {
      "triggerReference": "9",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 50,
      "unitPrice": 10.45,
      "accountGroupId": "IT000040",
      "fee": 0,
      "transactionTimestamp": "2025-10-04T01:03:00+00:00",
      "valueDate": "2025-10-06"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "invFundUCITS": "NO",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_331 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000045",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 10.0,
      "accountGroupId": "IT000045",
      "fee": 5.0,
      "transactionTimestamp": "2025-05-30T01:01:00+00:00",
      "valueDate": "2025-06-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 50,
      "unitPrice": 11.0,
      "accountGroupId": "IT000045",
      "fee": 2.0,
      "transactionTimestamp": "2025-06-08T01:00:00+00:00",
      "valueDate": "2025-06-10",
      "comment": "Realize net gains: 50 - 2.50 - 2.00 = 45.50"
    },
    {
      "triggerReference": "3",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 50,
      "unitPrice": 9.0,
      "accountGroupId": "IT000045",
      "fee": 2.0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_332 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000046",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00B4L5Y983",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 10.0,
      "accountGroupId": "IT000046",
      "fee": 5.0,
      "transactionTimestamp": "2025-05-30T01:01:00+00:00",
      "valueDate": "2025-06-01"
    },
    {
      "triggerReference": "2",
      "isin": "IE00B4L5Y983",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 50,
      "unitPrice": 11.0,
      "accountGroupId": "IT000046",
      "fee": 2.0,
      "transactionTimestamp": "2025-06-08T01:00:00+00:00",
      "valueDate": "2025-06-10",
      "comment": "Tax base is gross gain: sale price - WAC; no deduction of sales fees"
    },
    {
      "triggerReference": "3",
      "isin": "IE00B4L5Y983",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 50,
      "unitPrice": 9.0,
      "accountGroupId": "IT000046",
      "fee": 2.0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B4L5Y983",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_411 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000003",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000003",
      "fee": 0.99,
      "transactionTimestamp": "2024-03-30T03:00:00+00:00",
      "valueDate": "2024-04-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0004967292",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 50.198,
      "accountGroupId": "IT000003",
      "fee": 0.99,
      "transactionTimestamp": "2024-03-30T03:00:00+00:00",
      "valueDate": "2024-04-02",
      "comment": "This creates a loss pot of 500.00 EUR for FY 2024."
    },
    {
      "triggerReference": "3",
      "isin": "DE0002635307",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 50.0,
      "accountGroupId": "IT000003",
      "fee": 0,
      "transactionTimestamp": "2024-04-29T01:00:00+00:00",
      "valueDate": "2024-05-01"
    },
    {
      "triggerReference": "4",
      "isin": "DE0002635307",
      "eventType": "CA_DISTRIBUTIONS",
      "accountGroupId": "IT000003",
      "grossAmount": 100.0,
      "transactionTimestamp": "2024-06-13T01:00:00+00:00",
      "valueDate": "2024-06-15",
      "comment": "Fund distributions cannot be offset with loss pot"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0004967292",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NONE"
    },
    {
      "isin": "DE0002635307",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_414A = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000006_DE_DEC",
    "taxRegime": "DICHIARATIVO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "DE0008404005",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 260.0,
      "accountGroupId": "IT000006_DE_DEC",
      "fee": 0,
      "transactionTimestamp": "2025-04-28T03:00:00+00:00",
      "valueDate": "2025-05-01"
    },
    {
      "triggerReference": "2",
      "isin": "DE0008404005",
      "eventType": "DIST_SECU",
      "accountGroupId": "IT000006_DE_DEC",
      "grossAmount": 1000.0,
      "transactionTimestamp": "2025-06-13T01:00:00+00:00",
      "valueDate": "2025-06-15"
    }
  ],
  "securityMasterData": [
    {
      "isin": "DE0008404005",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_414B = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000006_FR_DEC",
    "taxRegime": "DICHIARATIVO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "FR0000120321",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 50.0,
      "accountGroupId": "IT000006_FR_DEC",
      "fee": 0,
      "transactionTimestamp": "2025-04-28T03:00:00+00:00",
      "valueDate": "2025-05-01"
    },
    {
      "triggerReference": "2",
      "isin": "FR0000120321",
      "eventType": "DIST_SECU",
      "accountGroupId": "IT000006_FR_DEC",
      "grossAmount": 500.0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "FR0000120321",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "FR",
      "fttRelevance": "BUY_ONLY"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_412 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000004",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00BG47KB92",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1000,
      "unitPrice": 25.0,
      "accountGroupId": "IT000004",
      "fee": 0,
      "transactionTimestamp": "2025-01-08T03:00:00+00:00",
      "valueDate": "2025-01-10"
    },
    {
      "triggerReference": "2",
      "isin": "IE00BG47KB92",
      "eventType": "CA_DISTRIBUTIONS",
      "accountGroupId": "IT000004",
      "grossAmount": 500.0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20",
      "comment": "This fund distribution is partially exempted. See IRRP in fundTaxData."
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00BG47KB92",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ],
  "fundTaxData": [
    {
      "isin": "IE00BG47KB92",
      "validFrom": "2025-01-01",
      "validTo": "2025-06-30",
      "irrp": 0.5643
    }
  ]
}`;

const SAMPLE_INPUT_CASE_413A = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000006_DE",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "DE0008404005",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 260.0,
      "accountGroupId": "IT000006_DE",
      "fee": 0,
      "transactionTimestamp": "2025-04-28T03:00:00+00:00",
      "valueDate": "2025-05-01"
    },
    {
      "triggerReference": "2",
      "isin": "DE0008404005",
      "eventType": "DIST_SECU",
      "accountGroupId": "IT000006_DE",
      "grossAmount": 1000.0,
      "transactionTimestamp": "2025-06-13T01:00:00+00:00",
      "valueDate": "2025-06-15"
    }
  ],
  "securityMasterData": [
    {
      "isin": "DE0008404005",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_413B = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000006_DE",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "FR0000120321",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 400.0,
      "accountGroupId": "IT000006_DE",
      "fee": 0,
      "transactionTimestamp": "2025-04-28T03:00:00+00:00",
      "valueDate": "2025-05-01"
    },
    {
      "triggerReference": "2",
      "isin": "FR0000120321",
      "eventType": "DIST_SECU",
      "accountGroupId": "IT000006_DE",
      "grossAmount": 500.0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "FR0000120321",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "FR",
      "fttRelevance": "BUY_ONLY"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_415 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000007",
    "taxRegime": "DICHIARATIVO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00B0M62Q58",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 50.0,
      "accountGroupId": "IT000007",
      "fee": 0,
      "transactionTimestamp": "2025-01-08T03:00:00+00:00",
      "valueDate": "2025-01-10"
    },
    {
      "triggerReference": "2",
      "isin": "IE00B0M62Q58",
      "eventType": "CA_CLUSTER_R",
      "accountGroupId": "IT000007",
      "grossAmount": 50.0,
      "transactionTimestamp": "2025-06-18T01:00:00+00:00",
      "valueDate": "2025-06-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B0M62Q58",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_511 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000051",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 110.0,
      "accountGroupId": "IT000051",
      "fee": 0,
      "transactionTimestamp": "2024-04-01T03:00:00+00:00",
      "valueDate": "2024-04-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 100.0,
      "accountGroupId": "IT000051",
      "fee": 0,
      "transactionTimestamp": "2024-04-02T03:00:00+00:00",
      "valueDate": "2024-04-02"
    },
    {
      "triggerReference": "3",
      "isin": "IE00B1W57M07",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 50.0,
      "accountGroupId": "IT000051",
      "fee": 0,
      "transactionTimestamp": "2025-02-10T03:00:00+00:00",
      "valueDate": "2025-02-10"
    },
    {
      "triggerReference": "4",
      "isin": "IE00B1W57M07",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 60.0,
      "accountGroupId": "IT000051",
      "fee": 0,
      "transactionTimestamp": "2025-06-15T03:00:00+00:00",
      "valueDate": "2025-06-15"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0003132476",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "YES"
    },
    {
      "isin": "IE00B1W57M07",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_512 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000052",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00B14X4Q57",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000052",
      "fee": 0,
      "transactionTimestamp": "2025-01-15T03:00:00+00:00",
      "valueDate": "2025-01-15"
    },
    {
      "triggerReference": "2",
      "isin": "IE00B14X4Q57",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 90.0,
      "accountGroupId": "IT000052",
      "fee": 0,
      "transactionTimestamp": "2025-08-20T03:00:00+00:00",
      "valueDate": "2025-08-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B14X4Q57",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ],
  "fundTaxData": [
    {
      "isin": "IE00B14X4Q57",
      "validFrom": "2025-01-01",
      "validTo": "2025-12-31",
      "irrp": 1.0
    }
  ]
}`;

const SAMPLE_INPUT_CASE_513 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000053",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00BMVB5L14",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1000,
      "unitPrice": 25.0,
      "accountGroupId": "IT000053",
      "fee": 0,
      "transactionTimestamp": "2025-08-01T03:00:00+00:00",
      "valueDate": "2025-08-01"
    },
    {
      "triggerReference": "2",
      "isin": "IE00BMVB5L14",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1000,
      "unitPrice": 24.0,
      "accountGroupId": "IT000053",
      "fee": 0,
      "transactionTimestamp": "2025-09-10T03:00:00+00:00",
      "valueDate": "2025-09-10"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00BMVB5L14",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ],
  "fundTaxData": [
    {
      "isin": "IE00BMVB5L14",
      "validFrom": "2025-07-01",
      "validTo": "2025-12-31",
      "irrp": 0.481
    }
  ]
}`;

const SAMPLE_INPUT_CASE_514 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000054",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 220.0,
      "accountGroupId": "IT000054",
      "fee": 0,
      "transactionTimestamp": "2024-04-01T03:00:00+00:00",
      "valueDate": "2024-04-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 20.0,
      "accountGroupId": "IT000054",
      "fee": 0,
      "transactionTimestamp": "2024-04-02T03:00:00+00:00",
      "valueDate": "2024-04-02"
    },
    {
      "triggerReference": "3",
      "isin": "IE00BMVB5M21",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 50.0,
      "accountGroupId": "IT000054",
      "fee": 0,
      "transactionTimestamp": "2025-01-17T03:00:00+00:00",
      "valueDate": "2025-01-17"
    },
    {
      "triggerReference": "4",
      "isin": "IE00BMVB5M21",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000054",
      "fee": 0,
      "transactionTimestamp": "2025-03-12T03:00:00+00:00",
      "valueDate": "2025-03-12"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0003132476",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "YES"
    },
    {
      "isin": "IE00BMVB5M21",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ],
  "fundTaxData": [
    {
      "isin": "IE00BMVB5M21",
      "validFrom": "2025-01-01",
      "validTo": "2025-06-30",
      "irrp": 0.4
    }
  ]
}`;

const SAMPLE_INPUT_CASE_611 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000061",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 14.0,
      "accountGroupId": "IT000061",
      "fee": 5.0,
      "transactionTimestamp": "2025-03-10T03:00:00+00:00",
      "valueDate": "2025-03-10"
    },
    {
      "triggerReference": "2",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 40,
      "unitPrice": 14.5,
      "accountGroupId": "IT000061",
      "fee": 5.0,
      "transactionTimestamp": "2025-03-10T04:00:00+00:00",
      "valueDate": "2025-03-10"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0003132476",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "YES"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_612 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000062",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0000072618",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1000,
      "unitPrice": 2.5,
      "accountGroupId": "IT000062",
      "fee": 2.0,
      "transactionTimestamp": "2025-04-15T03:00:00+00:00",
      "valueDate": "2025-04-15"
    },
    {
      "triggerReference": "2",
      "isin": "IT0000072618",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1000,
      "unitPrice": 2.6,
      "accountGroupId": "IT000062",
      "fee": 2.0,
      "transactionTimestamp": "2025-04-15T04:00:00+00:00",
      "valueDate": "2025-04-15"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0000072618",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "BANKS",
      "countryOfOrigin": "IT",
      "fttRelevance": "YES"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_613 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000063",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "0",
      "isin": "IT0005239360",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 10.0,
      "accountGroupId": "IT000063",
      "fee": 0,
      "transactionTimestamp": "2025-01-02T03:00:00+00:00",
      "valueDate": "2025-01-02",
      "comment": "Historical preload to satisfy pre-condition: 100 shares at fiscal cost 10.00"
    },
    {
      "triggerReference": "1",
      "isin": "IT0005239360",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 11.0,
      "accountGroupId": "IT000063",
      "fee": 5.0,
      "transactionTimestamp": "2025-05-20T01:00:00+00:00",
      "valueDate": "2025-05-20"
    },
    {
      "triggerReference": "2",
      "isin": "IT0005239360",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 50,
      "unitPrice": 10.8,
      "accountGroupId": "IT000063",
      "fee": 5.0,
      "transactionTimestamp": "2025-05-20T03:00:00+00:00",
      "valueDate": "2025-05-20"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0005239360",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "BANKS",
      "countryOfOrigin": "IT",
      "fttRelevance": "YES"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_621 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000064",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0000076536",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1000,
      "unitPrice": 2.5,
      "accountGroupId": "IT000064",
      "fee": 5.0,
      "transactionTimestamp": "2025-06-10T03:00:00+00:00",
      "valueDate": "2025-06-10"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0000076536",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "NO"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_622 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000065",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "NL00150001Q9",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 500,
      "unitPrice": 15.0,
      "accountGroupId": "IT000065",
      "fee": 5.0,
      "transactionTimestamp": "2025-07-22T03:00:00+00:00",
      "valueDate": "2025-07-22"
    },
    {
      "triggerReference": "2",
      "isin": "NL00150001Q9",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 200,
      "unitPrice": 15.5,
      "accountGroupId": "IT000065",
      "fee": 5.0,
      "transactionTimestamp": "2025-07-22T04:00:00+00:00",
      "valueDate": "2025-07-22"
    }
  ],
  "securityMasterData": [
    {
      "isin": "NL00150001Q9",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "NL",
      "fttRelevance": "NO"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_631 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000066",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "DE000UG7ALU7",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10000,
      "unitPrice": 0.464,
      "accountGroupId": "IT000066",
      "fee": 5.0,
      "transactionTimestamp": "2025-10-10T03:00:00+00:00",
      "valueDate": "2025-10-10"
    }
  ],
  "securityMasterData": [
    {
      "isin": "DE000UG7ALU7",
      "bankAssetType": "CERT",
      "productType": "WARRANTS",
      "invFundUCITS": "NO",
      "issuerGroup": "BANKS",
      "countryOfOrigin": "DE",
      "fttRelevance": "YES"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_632 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000067",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00B53L4X51",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 25.0,
      "accountGroupId": "IT000067",
      "fee": 5.0,
      "transactionTimestamp": "2025-11-12T03:00:00+00:00",
      "valueDate": "2025-11-12"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00B53L4X51",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NO"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_711 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000051",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "DE0005140008",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1000,
      "unitPrice": 16.0,
      "accountGroupId": "IT000051",
      "fee": 0.99,
      "transactionTimestamp": "2025-06-10T03:00:00+00:00",
      "valueDate": "2025-06-10"
    },
    {
      "triggerReference": "2",
      "isin": "DE0005140008",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1000,
      "unitPrice": 15.0,
      "accountGroupId": "IT000051",
      "fee": 0.99,
      "transactionTimestamp": "2025-06-15T03:00:00+00:00",
      "valueDate": "2025-06-15"
    }
  ],
  "securityMasterData": [
    {
      "isin": "DE0005140008",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "BANKS",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_712 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000051",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "DE0005140008",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1000,
      "unitPrice": 16.0,
      "accountGroupId": "IT000051",
      "fee": 0.99,
      "transactionTimestamp": "2025-06-10T03:00:00+00:00",
      "valueDate": "2025-06-10"
    },
    {
      "triggerReference": "2",
      "isin": "DE0005140008",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1000,
      "unitPrice": 17.0,
      "accountGroupId": "IT000051",
      "fee": 0.99,
      "transactionTimestamp": "2025-06-15T03:00:00+00:00",
      "valueDate": "2025-06-15"
    }
  ],
  "securityMasterData": [
    {
      "isin": "DE0005140008",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "BANKS",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_721 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000052",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2026,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "T0",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1000,
      "unitPrice": 14.5,
      "accountGroupId": "IT000052",
      "fee": 1.0,
      "transactionTimestamp": "2026-01-12T03:00:00+00:00",
      "valueDate": "2026-01-12"
    },
    {
      "triggerReference": "T1",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 1000,
      "unitPrice": 15.0,
      "accountGroupId": "IT000052",
      "fee": 1.0,
      "transactionTimestamp": "2026-01-13T03:00:00+00:00",
      "valueDate": "2026-01-13"
    },
    {
      "triggerReference": "T3",
      "eventType": "REVERSAL",
      "correctedTriggerReference": "T0",
      "transactionTimestamp": "2026-01-14T03:00:00+00:00",
      "valueDate": "2026-01-14"
    },
    {
      "triggerReference": "T4",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 1000,
      "unitPrice": 14.0,
      "accountGroupId": "IT000052",
      "fee": 1.0,
      "transactionTimestamp": "2026-01-15T03:00:00+00:00",
      "valueDate": "2026-01-15"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0003132476",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "YES"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_731 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000071",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2026,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00BMVB5M21",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 50.0,
      "accountGroupId": "IT000071",
      "fee": 1.0,
      "transactionTimestamp": "2026-02-10T03:00:00+00:00",
      "valueDate": "2026-02-10"
    },
    {
      "triggerReference": "2",
      "isin": "IE00BMVB5M21",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 45.0,
      "accountGroupId": "IT000071",
      "fee": 1.0,
      "transactionTimestamp": "2026-03-10T03:00:00+00:00",
      "valueDate": "2026-03-10"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00BMVB5M21",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ],
  "fundTaxData": [
    {
      "isin": "IE00BMVB5M21",
      "validFrom": "2026-01-01",
      "validTo": "2026-06-30",
      "irrp": 0.3859
    }
  ]
}`;

const SAMPLE_INPUT_CASE_732 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000072",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2026,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IE00BMVB5M21",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 50.0,
      "accountGroupId": "IT000072",
      "fee": 0.0,
      "transactionTimestamp": "2026-02-10T03:00:00+00:00",
      "valueDate": "2026-02-10"
    },
    {
      "triggerReference": "2",
      "isin": "IE00BMVB5M21",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 55.0,
      "accountGroupId": "IT000072",
      "fee": 0.0,
      "transactionTimestamp": "2026-03-10T03:00:00+00:00",
      "valueDate": "2026-03-10"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IE00BMVB5M21",
      "bankAssetType": "ETF",
      "productType": "INDEX_FUNDS",
      "invFundUCITS": "YES",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IE",
      "fttRelevance": "NONE"
    }
  ],
  "fundTaxData": [
    {
      "isin": "IE00BMVB5M21",
      "validFrom": "2026-01-01",
      "validTo": "2026-06-30",
      "irrp": 0.3859
    }
  ]
}`;

const SAMPLE_INPUT_CASE_733 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000073",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2024,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 10,
      "unitPrice": 100.0,
      "accountGroupId": "IT000073",
      "fee": 0.0,
      "transactionTimestamp": "2024-04-01T03:00:00+00:00",
      "valueDate": "2024-04-01"
    },
    {
      "triggerReference": "2",
      "isin": "IT0003132476",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 10,
      "unitPrice": 70.0,
      "accountGroupId": "IT000073",
      "fee": 0.0,
      "transactionTimestamp": "2024-04-02T03:00:00+00:00",
      "valueDate": "2024-04-02"
    },
    {
      "triggerReference": "3",
      "isin": "DE0005140008",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 50.0,
      "accountGroupId": "IT000073",
      "fee": 0.0,
      "transactionTimestamp": "2025-06-10T03:00:00+00:00",
      "valueDate": "2025-06-10"
    },
    {
      "triggerReference": "4",
      "isin": "DE0005140008",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 45.0,
      "accountGroupId": "IT000073",
      "fee": 0.0,
      "transactionTimestamp": "2025-06-15T03:00:00+00:00",
      "valueDate": "2025-06-15"
    }
  ],
  "securityMasterData": [
    {
      "isin": "IT0003132476",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "COMPANIES_AND_PRIVATE_INDIVIDUALS",
      "countryOfOrigin": "IT",
      "fttRelevance": "YES"
    },
    {
      "isin": "DE0005140008",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "BANKS",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;

const SAMPLE_INPUT_CASE_734 = `{
  "clientData": {
    "countryOfTaxResidency": "IT",
    "accountGroupId": "IT000074",
    "taxRegime": "AMMINISTRATO"
  },
  "clientInitialState": {
    "year": 2025,
    "lossPots": {}
  },
  "events": [
    {
      "triggerReference": "1",
      "isin": "DE0005140008",
      "eventType": "INSTRUMENT_SELL",
      "quantity": 100,
      "unitPrice": 20.0,
      "accountGroupId": "IT000074",
      "fee": 0.0,
      "transactionTimestamp": "2025-03-01T03:00:00+00:00",
      "valueDate": "2025-03-01"
    },
    {
      "triggerReference": "2",
      "isin": "DE0005140008",
      "eventType": "DIST_SECU",
      "accountGroupId": "IT000074",
      "grossAmount": -30.0,
      "transactionTimestamp": "2025-03-15T03:00:00+00:00",
      "valueDate": "2025-03-15"
    },
    {
      "triggerReference": "3",
      "isin": "DE0005140008",
      "eventType": "INSTRUMENT_BUY",
      "quantity": 100,
      "unitPrice": 19.0,
      "accountGroupId": "IT000074",
      "fee": 0.0,
      "transactionTimestamp": "2025-04-01T03:00:00+00:00",
      "valueDate": "2025-04-01"
    }
  ],
  "securityMasterData": [
    {
      "isin": "DE0005140008",
      "bankAssetType": "SHR",
      "productType": "ORDINARY_SHARES",
      "invFundUCITS": "NO",
      "issuerGroup": "BANKS",
      "countryOfOrigin": "DE",
      "fttRelevance": "NONE"
    }
  ]
}`;


const STANDARD_TAX_RATE = 0.26;
const FFTT_RATE = 0.004;
const FFTT_RATE_OLD = 0.003;
const FFTT_RATE_CHANGE_DATE = new Date("2025-04-01T00:00:00Z");

const N_DECIMALS_AMOUNT = 2;
const N_DECIMALS_MARKET_PRICE = 5;
const N_DECIMALS_OPEN_AMOUNT = 2;
const N_DECIMALS_TAX_RATE = 6;
const N_DECIMALS_WEIGHTED_AVERAGE_COST = 5;

const EventType = {
  BUY: "INSTRUMENT_BUY",
  SELL: "INSTRUMENT_SELL",
  FUND_DISTRIBUTION: "CA_DISTRIBUTIONS",
  STOCK_DIVIDEND: "DIST_SECU",
  TAX_NEUTRAL_PAYOUT: "CA_CLUSTER_R",
  REVERSAL: "REVERSAL",
};

const inputEl = document.getElementById("inputJson");
const outputEl = document.getElementById("outputJson");
const errorBox = document.getElementById("errorBox");
const scopeList = document.getElementById("scopeList");
const caseDescription = document.getElementById("caseDescription");
const caseTags = document.getElementById("caseTags");
const caseTitle = document.getElementById("caseTitle");

const kpiTax = document.getElementById("kpiTax");
const kpiTaxLabel = document.getElementById("kpiTaxLabel");
const kpiTaxRate = document.getElementById("kpiTaxRate");
const kpiPnl = document.getElementById("kpiPnl");
const kpiType = document.getElementById("kpiType");
const kpiPositions = document.getElementById("kpiPositions");
const kpiBalance = document.getElementById("kpiBalance");
const summaryBox = document.getElementById("summaryBox");
const eventTableBody = document.getElementById("eventTableBody");
const outputStatus = document.getElementById("outputStatus");

const CASES = {
  "scope1-case111": {
    label: "Scope 1 - Case 1.1.1",
    description: "Italian equity BUY/SELL under AMMINISTRATO. WAC method, 26% flat tax.",
    tags: ["AMMINISTRATO", "Shares", "WAC", "26% flat"],
    sample: SAMPLE_INPUT_CASE_111,
  },
  "scope1-case112": {
    label: "Scope 1 - Case 1.1.2",
    description: "Same trade flow, but DICHIARATIVO regime. Tax goes to client fiscal debt.",
    tags: ["DICHIARATIVO", "Shares", "WAC", "26% flat"],
    sample: SAMPLE_INPUT_CASE_112,
  },
  "scope1-case121": {
    label: "Scope 1 - Case 1.2.1",
    description: "ETF UCITS (corporate issuer). Capital income taxed at 26%.",
    tags: ["AMMINISTRATO", "ETF UCITS", "Capital income"],
    sample: SAMPLE_INPUT_CASE_121,
  },
  "scope1-case122": {
    label: "Scope 1 - Case 1.2.2",
    description: "Government fund with IRRP=1, effective rate 12.5%.",
    tags: ["AMMINISTRATO", "ETF gov", "IRRP=1", "12.5%"],
    sample: SAMPLE_INPUT_CASE_122,
  },
  "scope1-case123": {
    label: "Scope 1 - Case 1.2.3",
    description: "ETF UCITS with IRRP applied to gain; reduced effective rate.",
    tags: ["AMMINISTRATO", "ETF UCITS", "IRRP gain"],
    sample: SAMPLE_INPUT_CASE_123,
  },
  "scope1-case124": {
    label: "Scope 1 - Case 1.2.4",
    description: "ETF UCITS with IRRP change across years and partial sells.",
    tags: ["AMMINISTRATO", "ETF UCITS", "IRRP change"],
    sample: SAMPLE_INPUT_CASE_124,
  },
  "scope1-case125": {
    label: "Scope 1 - Case 1.2.5",
    description: "ETF UCITS gains under DICHIARATIVO; tax recorded as fiscal debt.",
    tags: ["DICHIARATIVO", "ETF UCITS", "Capital income"],
    sample: SAMPLE_INPUT_CASE_125,
  },
  "scope1-case126": {
    label: "Scope 1 - Case 1.2.6",
    description: "Cash distribution under DICHIARATIVO with UCITS withholding.",
    tags: ["DICHIARATIVO", "Cash distribution", "UCITS"],
    sample: SAMPLE_INPUT_CASE_126,
  },
  "scope2-case211": {
    label: "Scope 2 - Case 2.1.1",
    description: "Unified loss pot offset with chronological gain usage.",
    tags: ["AMMINISTRATO", "Loss pot", "Chronological offset"],
    sample: SAMPLE_INPUT_CASE_211,
  },
  "scope2-case212": {
    label: "Scope 2 - Case 2.1.2",
    description: "Loss pot larger than gains; remaining losses persist.",
    tags: ["AMMINISTRATO", "Loss pot", "Losses > gains"],
    sample: SAMPLE_INPUT_CASE_212,
  },
  "scope2-case213": {
    label: "Scope 2 - Case 2.1.3",
    description: "Loss pot expiry test across multi-year gap.",
    tags: ["AMMINISTRATO", "Loss pot", "Expiry"],
    sample: SAMPLE_INPUT_CASE_213,
  },
  "scope2-case214": {
    label: "Scope 2 - Case 2.1.4",
    description: "Partial loss pot expiration with staggered loss years.",
    tags: ["AMMINISTRATO", "Loss pot", "Partial expiry"],
    sample: SAMPLE_INPUT_CASE_214,
  },
  "scope2-case215": {
    label: "Scope 2 - Case 2.1.5",
    description: "Multiple loss pot components across years.",
    tags: ["AMMINISTRATO", "Loss pot", "Multiple components"],
    sample: SAMPLE_INPUT_CASE_215,
  },
  "scope2-case216": {
    label: "Scope 2 - Case 2.1.6",
    description: "Derivative loss followed by gain with loss pot offset.",
    tags: ["AMMINISTRATO", "Loss pot", "Derivatives"],
    sample: SAMPLE_INPUT_CASE_216,
  },
  "scope2-case221": {
    label: "Scope 2 - Case 2.2.1",
    description: "Capital income gain while a loss pot exists.",
    tags: ["AMMINISTRATO", "Capital income", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_221,
  },
  "scope2-case222": {
    label: "Scope 2 - Case 2.2.2",
    description: "ETF redemption gain with existing loss pot.",
    tags: ["AMMINISTRATO", "ETF redemption", "Capital income"],
    sample: SAMPLE_INPUT_CASE_222,
  },
  "scope2-case223": {
    label: "Scope 2 - Case 2.2.3",
    description: "ETF redemption loss creates a new loss pot.",
    tags: ["AMMINISTRATO", "ETF redemption", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_223,
  },
  "scope2-case224": {
    label: "Scope 2 - Case 2.2.4",
    description: "ETF loss with partial offset against prior loss pot.",
    tags: ["AMMINISTRATO", "ETF loss", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_224,
  },
  "scope3-case311": {
    label: "Scope 3 - Case 3.1.1",
    description: "Rounding before vs after aggregation with loss pot impact.",
    tags: ["AMMINISTRATO", "Rounding", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_311,
  },
  "scope3-case312": {
    label: "Scope 3 - Case 3.1.2",
    description: "Sequential loss pot consumption across multiple sells.",
    tags: ["AMMINISTRATO", "Loss pot", "Sequential"],
    sample: SAMPLE_INPUT_CASE_312,
  },
  "scope3-case313": {
    label: "Scope 3 - Case 3.1.3",
    description: "Micro-decimal rounding creates minimal loss pot.",
    tags: ["AMMINISTRATO", "Rounding", "Micro decimal"],
    sample: SAMPLE_INPUT_CASE_313,
  },
  "scope3-case314": {
    label: "Scope 3 - Case 3.1.4",
    description: "Multiple partial fills on same day with loss pot usage.",
    tags: ["AMMINISTRATO", "Partial fills", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_314,
  },
  "scope3-case315": {
    label: "Scope 3 - Case 3.1.5",
    description: "Mixed gains and losses on same day with net loss pot effect.",
    tags: ["AMMINISTRATO", "Mixed gains", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_315,
  },
  "scope3-case316": {
    label: "Scope 3 - Case 3.1.6",
    description: "Loss pot used across multiple ISINs in the same session.",
    tags: ["AMMINISTRATO", "Cross-ISIN", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_316,
  },
  "scope3-case321": {
    label: "Scope 3 - Case 3.2.1",
    description: "Intraday WAC with reversal and loss pot adjustments.",
    tags: ["AMMINISTRATO", "WAC", "Reversal"],
    sample: SAMPLE_INPUT_CASE_321,
  },
  "scope3-case322": {
    label: "Scope 3 - Case 3.2.2",
    description: "Complex WAC sequence with multiple buys and sells.",
    tags: ["AMMINISTRATO", "WAC", "Complex"],
    sample: SAMPLE_INPUT_CASE_322,
  },
  "scope3-case331": {
    label: "Scope 3 - Case 3.3.1",
    description: "Impact of trading fees on share gains and losses.",
    tags: ["AMMINISTRATO", "Fees", "Shares"],
    sample: SAMPLE_INPUT_CASE_331,
  },
  "scope3-case332": {
    label: "Scope 3 - Case 3.3.2",
    description: "ETF taxation with non-deductible fees and gross tax base.",
    tags: ["AMMINISTRATO", "Fees", "ETF UCITS"],
    sample: SAMPLE_INPUT_CASE_332,
  },
  "scope4-case411": {
    label: "Scope 4 - Case 4.1.1",
    description: "ETF cash distribution under AMMINISTRATO with loss pot present.",
    tags: ["AMMINISTRATO", "ETF UCITS", "Distribution"],
    sample: SAMPLE_INPUT_CASE_411,
  },
  "scope4-case412": {
    label: "Scope 4 - Case 4.1.2",
    description: "Whitelisted ETF distribution with IRRP-based tax rate.",
    tags: ["AMMINISTRATO", "ETF UCITS", "IRRP"],
    sample: SAMPLE_INPUT_CASE_412,
  },
  "scope4-case413a": {
    label: "Scope 4 - Case 4.1.3a",
    description: "German stock dividend under AMMINISTRATO (net frontier).",
    tags: ["AMMINISTRATO", "Dividend", "DE shares"],
    sample: SAMPLE_INPUT_CASE_413A,
  },
  "scope4-case413b": {
    label: "Scope 4 - Case 4.1.3b",
    description: "French stock dividend under AMMINISTRATO with FTT on buy.",
    tags: ["AMMINISTRATO", "Dividend", "FR shares", "FTT"],
    sample: SAMPLE_INPUT_CASE_413B,
  },
  "scope4-case414a": {
    label: "Scope 4 - Case 4.1.4a",
    description: "German stock dividend under DICHIARATIVO with fiscal debt output.",
    tags: ["DICHIARATIVO", "Dividend", "DE shares"],
    sample: SAMPLE_INPUT_CASE_414A,
  },
  "scope4-case414b": {
    label: "Scope 4 - Case 4.1.4b",
    description: "French stock dividend under DICHIARATIVO with FTT on buy.",
    tags: ["DICHIARATIVO", "Dividend", "FR shares", "FTT"],
    sample: SAMPLE_INPUT_CASE_414B,
  },
  "scope4-case415": {
    label: "Scope 4 - Case 4.1.5",
    description: "Return of capital distribution reduces open amount, no tax.",
    tags: ["DICHIARATIVO", "Return of capital", "ETF UCITS"],
    sample: SAMPLE_INPUT_CASE_415,
  },
  "scope5-case511": {
    label: "Scope 5 - Case 5.1.1",
    description: "ETF gain is capital income and does not offset a prior loss pot.",
    tags: ["AMMINISTRATO", "ETF UCITS", "Loss pot", "Capital income"],
    sample: SAMPLE_INPUT_CASE_511,
  },
  "scope5-case512": {
    label: "Scope 5 - Case 5.1.2",
    description: "Whitelisted ETF loss demultiplied (IRRP=1).",
    tags: ["AMMINISTRATO", "ETF UCITS", "IRRP=1", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_512,
  },
  "scope5-case513": {
    label: "Scope 5 - Case 5.1.3",
    description: "Partial whitelist ETF loss with IRRP-based adjustment.",
    tags: ["AMMINISTRATO", "ETF UCITS", "IRRP partial", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_513,
  },
  "scope5-case514": {
    label: "Scope 5 - Case 5.1.4",
    description: "Whitelisted ETF gain with IRRP; no loss pot offset.",
    tags: ["AMMINISTRATO", "ETF UCITS", "IRRP gain", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_514,
  },
  "scope6-case611": {
    label: "Scope 6 - Case 6.1.1",
    description: "Italian FTT positive daily net balance (buy > sell).",
    tags: ["AMMINISTRATO", "IFTT", "Shares", "Net long"],
    sample: SAMPLE_INPUT_CASE_611,
  },
  "scope6-case612": {
    label: "Scope 6 - Case 6.1.2",
    description: "Italian FTT intraday closure with zero net balance.",
    tags: ["AMMINISTRATO", "IFTT", "Shares", "Intraday"],
    sample: SAMPLE_INPUT_CASE_612,
  },
  "scope6-case613": {
    label: "Scope 6 - Case 6.1.3",
    description: "Italian FTT with negative daily net balance (sell > buy).",
    tags: ["AMMINISTRATO", "IFTT", "Shares", "Historical preload"],
    sample: SAMPLE_INPUT_CASE_613,
  },
  "scope6-case621": {
    label: "Scope 6 - Case 6.2.1",
    description: "IFTT exemption for Italian small cap shares.",
    tags: ["AMMINISTRATO", "IFTT", "Exemption", "Small cap"],
    sample: SAMPLE_INPUT_CASE_621,
  },
  "scope6-case622": {
    label: "Scope 6 - Case 6.2.2",
    description: "IFTT exemption for foreign issuer shares.",
    tags: ["AMMINISTRATO", "IFTT", "Exemption", "Foreign issuer"],
    sample: SAMPLE_INPUT_CASE_622,
  },
  "scope6-case631": {
    label: "Scope 6 - Case 6.3.1",
    description: "Italian FTT on securitized derivatives (deducted option).",
    tags: ["AMMINISTRATO", "IFTT", "CERT", "Warrants"],
    sample: SAMPLE_INPUT_CASE_631,
  },
  "scope6-case632": {
    label: "Scope 6 - Case 6.3.2",
    description: "IFTT exemption for ETF tracking Italian index.",
    tags: ["AMMINISTRATO", "IFTT", "ETF", "Exemption"],
    sample: SAMPLE_INPUT_CASE_632,
  },
  "scope7-case711": {
    label: "Scope 7 - Case 7.1.1",
    description: "Short profit on foreign share, tax triggered on buy-to-cover.",
    tags: ["AMMINISTRATO", "Short", "Shares", "Profit"],
    sample: SAMPLE_INPUT_CASE_711,
  },
  "scope7-case712": {
    label: "Scope 7 - Case 7.1.2",
    description: "Short loss on foreign share, generates loss pot.",
    tags: ["AMMINISTRATO", "Short", "Shares", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_712,
  },
  "scope7-case721": {
    label: "Scope 7 - Case 7.2.1",
    description: "Technical short with reversal and IFTT on closing buy day.",
    tags: ["AMMINISTRATO", "Short", "Reversal", "IFTT"],
    sample: SAMPLE_INPUT_CASE_721,
  },
  "scope7-case731": {
    label: "Scope 7 - Case 7.3.1",
    description: "Short profit on whitelisted ETF with IRRP.",
    tags: ["AMMINISTRATO", "Short", "ETF UCITS", "IRRP"],
    sample: SAMPLE_INPUT_CASE_731,
  },
  "scope7-case732": {
    label: "Scope 7 - Case 7.3.2",
    description: "Short loss on whitelisted ETF with LIE-adjusted loss pot.",
    tags: ["AMMINISTRATO", "Short", "ETF UCITS", "Loss pot"],
    sample: SAMPLE_INPUT_CASE_732,
  },
  "scope7-case733": {
    label: "Scope 7 - Case 7.3.3",
    description: "Short profit with usage of existing loss pot.",
    tags: ["AMMINISTRATO", "Short", "Shares", "Loss pot offset"],
    sample: SAMPLE_INPUT_CASE_733,
  },
  "scope7-case734": {
    label: "Scope 7 - Case 7.3.4",
    description: "Manufactured dividend cost on short strategy.",
    tags: ["AMMINISTRATO", "Short", "Dividend", "Manufactured"],
    sample: SAMPLE_INPUT_CASE_734,
  },
};

const setCaseUI = (caseId, { loadSample } = { loadSample: false }) => {
  const data = CASES[caseId];
  if (!data) return;

  caseDescription.textContent = data.description;
  caseTitle.textContent = data.label;
  caseTags.innerHTML = "";
  data.tags.forEach((tag) => {
    const chip = document.createElement("span");
    chip.textContent = tag;
    caseTags.appendChild(chip);
  });

  if (loadSample) {
    inputEl.value = data.sample;
  }
};

let currentCaseId = "scope1-case111";
setCaseUI(currentCaseId, { loadSample: true });

const setSelectedCaseButton = (caseId) => {
  const buttons = document.querySelectorAll(".case-item");
  buttons.forEach((btn) => {
    btn.classList.toggle("is-selected", btn.dataset.caseId === caseId);
  });
};

setSelectedCaseButton(currentCaseId);

const labelEvent = (type) => {
  switch (type) {
    case EventType.BUY:
      return "Buy";
    case EventType.SELL:
      return "Sell";
    case EventType.FUND_DISTRIBUTION:
      return "Distribution";
    case EventType.STOCK_DIVIDEND:
      return "Dividend";
    case EventType.TAX_NEUTRAL_PAYOUT:
      return "Neutral payout";
    case EventType.REVERSAL:
      return "Reversal";
    default:
      return type;
  }
};

const formatNumber = (value, decimals = 2) => {
  if (value === null || value === undefined || Number.isNaN(value)) return "--";
  return Number(value).toFixed(decimals);
};

const formatPercent = (value) => {
  if (value === null || value === undefined || Number.isNaN(value)) return "--";
  return `${(Number(value) * 100).toFixed(2)}%`;
};

const formatDate = (value) => {
  if (!value) return "--";
  const parts = String(value).split("T");
  return parts[0] || "--";
};

const getLatestState = (customerStates) => {
  if (!customerStates) return { year: null, state: null };
  const years = Object.keys(customerStates)
    .map((key) => Number(key))
    .filter((year) => !Number.isNaN(year));
  if (years.length === 0) return { year: null, state: null };
  const latestYear = Math.max(...years);
  return { year: latestYear, state: customerStates[String(latestYear)] || customerStates[latestYear] };
};

const round = (value, decimals = 2) => {
  const factor = 10 ** decimals;
  return Math.round((Number(value) + Number.EPSILON) * factor) / factor;
};

const parseTimestamp = (value) => {
  const ts = Date.parse(value);
  return Number.isNaN(ts) ? null : ts;
};

const showError = (message) => {
  errorBox.textContent = message;
  errorBox.hidden = false;
  outputStatus.textContent = "Error";
  outputStatus.style.background = "#f3f4f6";
  outputStatus.style.color = "#111827";
};

const clearError = () => {
  errorBox.hidden = true;
  outputStatus.textContent = "Ready";
  outputStatus.style.background = "#f3f4f6";
  outputStatus.style.color = "#111827";
};

const cloneState = (state) => JSON.parse(JSON.stringify(state));

const getLossPot = (state) => {
  let total = 0;
  for (let year = state.year - 4; year <= state.year; year += 1) {
    total += Number(state.lossPots?.[year] || 0);
  }
  return round(total, N_DECIMALS_AMOUNT);
};

const updateLossPot = (stateIn, pnl) => {
  const stateOut = cloneState(stateIn);
  if (!stateOut.lossPots) stateOut.lossPots = {};

  if (pnl < 0) {
    const year = stateOut.year;
    const current = Number(stateOut.lossPots[year] || 0);
    stateOut.lossPots[year] = round(current + Math.abs(pnl), N_DECIMALS_AMOUNT);
  } else {
    let year = stateOut.year - 4;
    let remaining = pnl;
    while (remaining > 0 && year <= stateOut.year) {
      const yearPot = Number(stateOut.lossPots[year] || 0);
      const newPot = Math.max(0, round(yearPot - remaining, N_DECIMALS_AMOUNT));
      if (newPot === 0) {
        delete stateOut.lossPots[year];
      } else {
        stateOut.lossPots[year] = newPot;
      }
      remaining -= yearPot;
      year += 1;
    }
  }
  return stateOut;
};

const updateCumulativeFields = (stateIn, pnl, incomeType) => {
  const stateOut = cloneState(stateIn);
  const rounded = round(pnl, N_DECIMALS_AMOUNT);
  if (incomeType === "MISCELLANEOUS_INCOME") {
    stateOut.cumulativeMiscellaneousIncome = round(
      Number(stateOut.cumulativeMiscellaneousIncome || 0) + rounded,
      N_DECIMALS_AMOUNT
    );
  } else {
    stateOut.cumulativeCapitalIncome = round(
      Number(stateOut.cumulativeCapitalIncome || 0) + rounded,
      N_DECIMALS_AMOUNT
    );
  }
  stateOut.cumulativeProfitLoss = round(
    Number(stateOut.cumulativeProfitLoss || 0) + rounded,
    N_DECIMALS_AMOUNT
  );
  return stateOut;
};

const updateTaxFields = (stateIn, taxAmount, taxRegime, smd, incomeType, opts) => {
  const stateOut = cloneState(stateIn);
  const isForeign = smd.countryOfOrigin !== "IT";
  const isSubjectToMandatoryWithholding =
    taxRegime === "AMMINISTRATO" ||
    (incomeType === "CAPITAL_INCOME" && !isForeign) ||
    (smd.invFundUCITS === "YES" && opts?.isCashDistributionEvent);

  if (isSubjectToMandatoryWithholding) {
    stateOut.totalTaxBurden = Math.max(
      0,
      round(Number(stateOut.totalTaxBurden || 0) + taxAmount, N_DECIMALS_AMOUNT)
    );
  } else {
    stateOut.clientFiscalDebt = round(
      Number(stateOut.clientFiscalDebt || 0) + taxAmount,
      N_DECIMALS_AMOUNT
    );
  }
  return stateOut;
};

const determineIncomeType = (pnl, assetType, invFundUCITS) => {
  const normalized = String(assetType || "").toUpperCase();
  if (
    normalized === "SHR" ||
    normalized === "SHARE" ||
    normalized === "DER" ||
    normalized === "DERIVATIVES" ||
    normalized === "ZFK"
  ) {
    return "MISCELLANEOUS_INCOME";
  }
  if (normalized === "ETF") {
    if (invFundUCITS === "YES") {
      return pnl >= 0 ? "CAPITAL_INCOME" : "MISCELLANEOUS_INCOME";
    }
    return pnl >= 0 ? "ORDINARY_INCOME" : "MISCELLANEOUS_INCOME";
  }
  throw new Error("Unknown asset type");
};

const isSellCommissionDeductible = (event, smd) => {
  const normalized = String(smd.bankAssetType || "").toUpperCase();
  return (
    normalized === "SHR" ||
    normalized === "SHARE" ||
    normalized === "DER" ||
    normalized === "DERIVATIVES" ||
    normalized === "ZFK"
  );
};

const isSubjectToFtt = (event, smd) => {
  const fttCountries = ["IT", "FR", "ES"];
  if (smd.fttRelevance === "BUY_ONLY") {
    const isCountry = fttCountries.includes(smd.countryOfOrigin);
    return isCountry && event.eventType === EventType.BUY;
  }
  return false;
};

const getFttRate = (event, smd) => {
  if (smd.countryOfOrigin === "FR") {
    const valueDate = new Date(event.valueDate);
    return valueDate >= FFTT_RATE_CHANGE_DATE ? FFTT_RATE : FFTT_RATE_OLD;
  }
  throw new Error(`FTT rate not configured for ${smd.countryOfOrigin}`);
};

const computeFttAmount = (event, smd) => {
  const rate = getFttRate(event, smd);
  const volume = Number(event.unitPrice) * Number(event.quantity);
  return rate * volume;
};

const getCountrySpecificTaxRate = (countryCode) => {
  const map = {
    IT: STANDARD_TAX_RATE,
    DE: 0.26375,
    FR: 0.25,
  };
  if (!map[countryCode]) throw new Error(`Unknown country code: ${countryCode}`);
  return map[countryCode];
};

const computeNetFrontierAmount = (amount, smd) => {
  const foreignTaxRate = getCountrySpecificTaxRate(smd.countryOfOrigin);
  return round(amount * (1 - foreignTaxRate), N_DECIMALS_AMOUNT);
};

const getIrrpRate = (isin, date, records) => {
  const sorted = [...records].sort((a, b) => new Date(b.validFrom) - new Date(a.validFrom));
  for (const record of sorted) {
    if (record.isin === isin) {
      const from = new Date(record.validFrom);
      const to = new Date(record.validTo);
      if (from <= date && date <= to) return Number(record.irrp);
    }
  }
  throw new Error("IRRP not found");
};

const computeLie = (event, fundTaxData) => {
  let irrp = 0;
  try {
    if (fundTaxData && fundTaxData.length > 0) {
      irrp = getIrrpRate(event.isin, new Date(event.valueDate), fundTaxData);
    }
  } catch (err) {
    irrp = 0;
  }
  const equalizationCoefficient = 0.125 / 0.26;
  return irrp * equalizationCoefficient + (1 - irrp);
};

const calculateTaxAmount = (pnl, lie, fee, isSellFeeDeductible) => {
  let adjustedPnl = pnl;
  if (!isSellFeeDeductible) {
    adjustedPnl += fee;
  }
  const taxableBase = round(adjustedPnl * lie, N_DECIMALS_AMOUNT);
  return round(taxableBase * STANDARD_TAX_RATE, N_DECIMALS_AMOUNT);
};

const computeAcquisitionPriceWac = (history, transactionEvent) => {
  let totalQty = 0;
  let currentAvgPrice = 0;
  let keyFound = false;
  const key = getQueueKey(transactionEvent);

  for (const event of history) {
    if (
      getQueueKey(event) === key &&
      !event.reversed &&
      parseTimestamp(event.transactionTimestamp) <= parseTimestamp(transactionEvent.transactionTimestamp)
    ) {
      if (event.eventType === EventType.BUY) {
        const buyVolume = Number(event.quantity) * Number(event.unitPrice);
        const buyCommission = Number(event.fee || 0);
        const totalAmount = totalQty * currentAvgPrice + buyVolume + buyCommission;
        totalQty += Number(event.quantity);
        currentAvgPrice = totalQty === 0 ? 0 : totalAmount / totalQty;
        keyFound = true;
      } else if (event.eventType === EventType.SELL) {
        totalQty -= Number(event.quantity);
        if (totalQty < 0) throw new Error("WAC does not support negative quantities");
      } else if (event.eventType === EventType.TAX_NEUTRAL_PAYOUT) {
        if (Number(event.grossAmount || 0) <= 0) continue;
        if (totalQty <= 0) throw new Error("Neutral payout requires an open position");
        const totalAmount = totalQty * currentAvgPrice - Number(event.grossAmount);
        currentAvgPrice = totalAmount / totalQty;
      }
    }
  }

  if (!keyFound) {
    throw new Error(`No matching event for ${key}`);
  }

  return round(currentAvgPrice, N_DECIMALS_WEIGHTED_AVERAGE_COST);
};

const getQueueKey = (event) => `${event.isin}:${event.accountGroupKey ?? event.accountGroupId ?? ""}`;

const normalizeEvent = (event, fallbackAccountGroupId) => {
  const providedAccountGroupId = event.accountGroupId ?? null;
  const accountGroupKey = providedAccountGroupId ?? fallbackAccountGroupId ?? null;

  return {
    triggerReference: String(event.triggerReference),
    isin: event.isin,
    eventType: event.eventType,
    quantity: Number(event.quantity || 0),
    unitPrice: Number(event.unitPrice || 0),
    accountGroupId: providedAccountGroupId,
    accountGroupKey,
    fee: Number(event.fee || 0),
    grossAmount: event.grossAmount !== undefined ? Number(event.grossAmount) : null,
    transactionTimestamp: event.transactionTimestamp,
    valueDate: event.valueDate,
    reversed: Boolean(event.reversed),
    correctedTriggerReference: event.correctedTriggerReference || null,
  };
};

const serializeState = (state) => {
  const output = { year: state.year, lossPots: {} };

  if (state.lossPots) {
    for (const [year, value] of Object.entries(state.lossPots)) {
      if (Number(value) !== 0) output.lossPots[year] = Number(value);
    }
  }

  const numericFields = [
    "totalTaxBurden",
    "cumulativeCapitalIncome",
    "cumulativeMiscellaneousIncome",
    "cumulativeProfitLoss",
    "clientFiscalDebt",
  ];

  for (const field of numericFields) {
    if (state[field] && Number(state[field]) !== 0) {
      output[field] = round(state[field], N_DECIMALS_AMOUNT);
    }
  }

  return output;
};

const cleanCalculation = (calculation) => {
  const output = {};
  if (calculation.taxAmount !== undefined && calculation.taxAmount !== null) {
    output.taxAmount = round(calculation.taxAmount, N_DECIMALS_AMOUNT);
  }
  if (calculation.taxRate !== undefined && calculation.taxRate !== null) {
    output.taxRate = round(calculation.taxRate, N_DECIMALS_TAX_RATE);
  }
  if (calculation.gainOrLoss !== undefined && calculation.gainOrLoss !== null) {
    output.gainOrLoss = round(calculation.gainOrLoss, N_DECIMALS_AMOUNT);
  }
  if (calculation.capitalIncome !== undefined && calculation.capitalIncome !== null) {
    output.capitalIncome = round(calculation.capitalIncome, N_DECIMALS_AMOUNT);
  }
  if (calculation.balance !== undefined && calculation.balance !== null) {
    output.balance = round(calculation.balance, N_DECIMALS_AMOUNT);
  }
  if (calculation.priceIn !== undefined && calculation.priceIn !== null) {
    output.priceIn = round(calculation.priceIn, N_DECIMALS_MARKET_PRICE);
  }
  return output;
};

const computeScope1Case111 = (input) => {
  const securityMap = new Map();
  for (const smd of input.securityMasterData || []) {
    securityMap.set(smd.isin, smd);
  }

  const buildInitialState = () => ({
    year: Number(input.clientInitialState?.year || new Date().getFullYear()),
    lossPots: { ...(input.clientInitialState?.lossPots || {}) },
    totalTaxBurden: 0,
    cumulativeCapitalIncome: 0,
    cumulativeMiscellaneousIncome: 0,
    cumulativeProfitLoss: 0,
    clientFiscalDebt: 0,
  });

  const state = buildInitialState();

  const taxRegime = input.clientData?.taxRegime || "AMMINISTRATO";
  const fundTaxData = input.fundTaxData || [];
  const openPositions = new Map();
  const eventHistory = [];
  const processed = new Set();

  const yearsAndStates = {};
  const entries = [];

  const applyEvent = (event, stateIn, openPositionsMap) => {
    let workingState = stateIn;
    const eventYear = new Date(event.valueDate).getFullYear();
    if (eventYear > workingState.year) {
      workingState = {
        year: eventYear,
        lossPots: { ...workingState.lossPots },
        totalTaxBurden: 0,
        cumulativeCapitalIncome: 0,
        cumulativeMiscellaneousIncome: 0,
        cumulativeProfitLoss: 0,
        clientFiscalDebt: 0,
      };
    } else if (eventYear < workingState.year) {
      throw new Error("Events out of chronological order are not supported");
    }

    let calculation = {};

    if (event.eventType === EventType.BUY) {
      const smd = securityMap.get(event.isin);
      let additionalFees = 0;
      if (smd && isSubjectToFtt(event, smd)) {
        additionalFees = computeFttAmount(event, smd);
      }
      const openAmount = round(
        -event.quantity * event.unitPrice - additionalFees - Number(event.fee || 0),
        N_DECIMALS_OPEN_AMOUNT
      );
      const pos = {
        securityId: event.isin,
        accountGroupId: event.accountGroupId,
        accountGroupKey: event.accountGroupKey,
        transactionTimestamp: event.transactionTimestamp,
        timestampMs: parseTimestamp(event.transactionTimestamp),
        openNominal: event.quantity,
        openAmount,
      };
      const key = getQueueKey(event);
      if (!openPositionsMap.has(key)) openPositionsMap.set(key, []);
      const queue = openPositionsMap.get(key);
      queue.push(pos);
      queue.sort((a, b) => (a.timestampMs || 0) - (b.timestampMs || 0));
    } else if (event.eventType === EventType.SELL) {
      const smd = securityMap.get(event.isin);
      if (!smd) throw new Error(`Missing SecurityMasterData for ${event.isin}`);

      const avgBuyPrice = computeAcquisitionPriceWac(eventHistory, event);

      const key = getQueueKey(event);
      const queue = openPositionsMap.get(key) || [];
      let sellQty = event.quantity;
      const removed = [];
      while (sellQty > 0) {
        if (queue.length === 0) throw new Error("Short positions are not supported");
        const pos = queue.shift();
        if (sellQty >= pos.openNominal) {
          removed.push(pos);
        } else {
          const openAmountPerPiece = pos.openAmount / pos.openNominal;
          const qtyRemoved = sellQty;
          const remaining = {
            ...pos,
            openNominal: pos.openNominal - qtyRemoved,
            openAmount: round(openAmountPerPiece * (pos.openNominal - qtyRemoved), N_DECIMALS_OPEN_AMOUNT),
          };
          queue.unshift(remaining);
          removed.push({
            ...pos,
            openNominal: qtyRemoved,
            openAmount: round(openAmountPerPiece * qtyRemoved, N_DECIMALS_OPEN_AMOUNT),
          });
        }
        sellQty -= removed[removed.length - 1].openNominal;
      }
      openPositionsMap.set(key, queue);

      const lie = computeLie(event, fundTaxData);
      const taxRate = round(STANDARD_TAX_RATE * lie, N_DECIMALS_TAX_RATE);
      const grossPnl = event.quantity * (event.unitPrice - avgBuyPrice);
      const fee = Number(event.fee || 0);
      const netPnl = grossPnl - fee;
      const roundedNetPnl = round(netPnl, N_DECIMALS_AMOUNT);
      const roundedGrossPnl = round(grossPnl, N_DECIMALS_AMOUNT);
      const roundedFee = round(fee, N_DECIMALS_AMOUNT);
      const feeDeductible = isSellCommissionDeductible(event, smd);
      const isUcitsEtf =
        String(smd.bankAssetType || "").toUpperCase() === "ETF" && String(smd.invFundUCITS || "") === "YES";
      const shouldSplitFee = !feeDeductible && roundedGrossPnl > 0 && isUcitsEtf;

      let incomeType = determineIncomeType(roundedNetPnl, smd.bankAssetType, smd.invFundUCITS);
      let miscIncomePnl = null;
      let capitalIncome = null;
      let offsetPnl = roundedNetPnl;
      let taxAmount = 0;

      if (shouldSplitFee) {
        incomeType = "CAPITAL_INCOME";
        workingState = updateCumulativeFields(workingState, roundedGrossPnl, "CAPITAL_INCOME");
        if (roundedFee !== 0) {
          workingState = updateCumulativeFields(workingState, -roundedFee, "MISCELLANEOUS_INCOME");
        }
        capitalIncome = roundedNetPnl;

        if (taxRegime === "AMMINISTRATO" && roundedFee !== 0) {
          workingState = updateLossPot(workingState, -roundedFee);
        }
        offsetPnl = roundedGrossPnl;

        taxAmount = calculateTaxAmount(offsetPnl, lie, 0, true);
      } else {
        workingState = updateCumulativeFields(workingState, netPnl, incomeType);

        if (incomeType === "MISCELLANEOUS_INCOME") {
          miscIncomePnl = roundedNetPnl;
        } else {
          capitalIncome = roundedNetPnl;
        }

        if (taxRegime === "AMMINISTRATO" && incomeType === "MISCELLANEOUS_INCOME") {
          const beforeLoss = getLossPot(workingState);
          workingState = updateLossPot(workingState, roundedNetPnl);
          if (roundedNetPnl > 0) {
            const afterLoss = getLossPot(workingState);
            offsetPnl = round(roundedNetPnl - (beforeLoss - afterLoss), N_DECIMALS_AMOUNT);
          }
        } else {
          offsetPnl = roundedNetPnl;
        }

        taxAmount = calculateTaxAmount(offsetPnl, lie, fee, feeDeductible);
      }

      workingState = updateTaxFields(workingState, taxAmount, taxRegime, smd, incomeType, {
        isCashDistributionEvent: false,
      });

      const balance = queue.reduce((sum, pos) => sum + pos.openNominal, 0);
      calculation = {
        taxRate,
        taxAmount: Math.max(0, taxAmount),
        gainOrLoss: miscIncomePnl,
        capitalIncome,
        balance,
        priceIn: avgBuyPrice,
      };
    } else if (event.eventType === EventType.FUND_DISTRIBUTION || event.eventType === EventType.STOCK_DIVIDEND) {
      const smd = securityMap.get(event.isin);
      if (!smd) throw new Error(`Missing SecurityMasterData for ${event.isin}`);
      const lie = computeLie(event, fundTaxData);
      const effectiveTaxRate = round(STANDARD_TAX_RATE * lie, N_DECIMALS_TAX_RATE);
      const pnl = event.grossAmount;
      const normalizedAsset = String(smd.bankAssetType || "").toUpperCase();
      const isShare = normalizedAsset === "SHR" || normalizedAsset === "SHARE";
      const applyNetFrontier = taxRegime !== "DICHIARATIVO" && smd.countryOfOrigin !== "IT" && isShare;
      const taxableAmount = applyNetFrontier ? computeNetFrontierAmount(event.grossAmount, smd) : pnl;
      const taxAmount = calculateTaxAmount(taxableAmount, lie, event.fee || 0, false);

      calculation = {
        taxRate: effectiveTaxRate,
        taxAmount,
        capitalIncome: event.grossAmount,
      };

      workingState = updateCumulativeFields(workingState, pnl, "CAPITAL_INCOME");
      workingState = updateTaxFields(workingState, taxAmount, taxRegime, smd, "CAPITAL_INCOME", {
        isCashDistributionEvent: true,
      });
    } else if (event.eventType === EventType.TAX_NEUTRAL_PAYOUT) {
      const key = getQueueKey(event);
      const queue = openPositionsMap.get(key) || [];
      const totalNominal = queue.reduce((sum, pos) => sum + pos.openNominal, 0);
      if (totalNominal <= 0) throw new Error("Neutral payout requires an open position");
      const perUnitReduction = event.grossAmount / totalNominal;
      for (const pos of queue) {
        pos.openAmount = round(pos.openAmount + perUnitReduction * pos.openNominal, N_DECIMALS_OPEN_AMOUNT);
      }
    } else {
      throw new Error(`Unsupported event type: ${event.eventType}`);
    }

    return { workingState, calculation };
  };

  const rebuildFromHistory = () => {
    let rebuiltState = buildInitialState();
    const rebuiltOpenPositions = new Map();
    const rebuiltYearsAndStates = {};
    let lastCalculation = {};

    for (const event of eventHistory) {
      if (event.eventType === EventType.REVERSAL || event.reversed) {
        continue;
      }
      const { workingState, calculation } = applyEvent(event, rebuiltState, rebuiltOpenPositions);
      rebuiltState = workingState;
      lastCalculation = calculation;
      rebuiltYearsAndStates[rebuiltState.year] = serializeState(rebuiltState);
    }

    return { rebuiltState, rebuiltOpenPositions, rebuiltYearsAndStates, lastCalculation };
  };

  for (const rawEvent of input.events || []) {
    const event = normalizeEvent(rawEvent, input.clientData?.accountGroupId);
    if (!event.accountGroupKey) {
      throw new Error("accountGroupId missing in events or clientData");
    }

    if (processed.has(event.triggerReference)) {
      throw new Error(`Duplicate triggerReference: ${event.triggerReference}`);
    }
    processed.add(event.triggerReference);
    eventHistory.push(event);

    let calculation = {};
    if (event.eventType === EventType.REVERSAL) {
      if (!event.correctedTriggerReference) {
        throw new Error("Reversal event missing correctedTriggerReference");
      }
      const corrected = eventHistory.find((e) => e.triggerReference === event.correctedTriggerReference);
      if (!corrected) {
        throw new Error(`Cannot reverse unknown triggerReference: ${event.correctedTriggerReference}`);
      }
      if (corrected.reversed) {
        throw new Error("Cannot reverse the same event twice");
      }
      corrected.reversed = true;

      const { rebuiltState, rebuiltOpenPositions, rebuiltYearsAndStates, lastCalculation } = rebuildFromHistory();
      Object.assign(state, rebuiltState);

      openPositions.clear();
      for (const [key, queue] of rebuiltOpenPositions.entries()) {
        openPositions.set(key, queue);
      }

      Object.keys(yearsAndStates).forEach((year) => {
        delete yearsAndStates[year];
      });
      Object.assign(yearsAndStates, rebuiltYearsAndStates);

      calculation = lastCalculation || {};
    } else {
      const { workingState, calculation: calcResult } = applyEvent(event, state, openPositions);
      Object.assign(state, workingState);
      calculation = calcResult;
    }

    yearsAndStates[state.year] = serializeState(state);
    const openPositionsFlat = [];
    for (const positions of openPositions.values()) {
      for (const pos of positions) {
        const outputPos = {
          securityId: pos.securityId,
          transactionTimestamp: pos.transactionTimestamp,
          openNominal: round(pos.openNominal, N_DECIMALS_AMOUNT),
          openAmount: round(pos.openAmount, N_DECIMALS_OPEN_AMOUNT),
        };
        if (pos.accountGroupId) {
          outputPos.accountGroupId = pos.accountGroupId;
        }
        openPositionsFlat.push(outputPos);
      }
    }
    openPositionsFlat.sort((a, b) => {
      const sec = a.securityId.localeCompare(b.securityId);
      if (sec !== 0) return sec;
      return Date.parse(a.transactionTimestamp) - Date.parse(b.transactionTimestamp);
    });

    const entry = {
      triggerReference: event.triggerReference,
      customerStates: { ...yearsAndStates },
      openPositions: openPositionsFlat.length > 0 ? openPositionsFlat : [],
      calculation: cleanCalculation(calculation),
    };

    entries.push(entry);
  }

  return entries;
};

const renderTable = (events, outputs) => {
  if (!eventTableBody) return;
  eventTableBody.innerHTML = "";
  if (!outputs || outputs.length === 0) return;

  const columnCount = document.querySelectorAll(".event-table thead th").length || 1;

  outputs.forEach((entry, idx) => {
    const event = events[idx] || {};
    const openPositions = entry.openPositions || [];
    const primaryPos = openPositions.length > 0 ? openPositions[0] : null;
    const calculation = entry.calculation || {};
    const { year: stateYear, state: stateSnapshot } = getLatestState(entry.customerStates || {});
    const lossPotEntries = stateSnapshot?.lossPots || {};
    const lossPotTotal = Object.values(lossPotEntries).reduce(
      (sum, value) => sum + Number(value || 0),
      0
    );

    const resultValue =
      calculation.gainOrLoss !== undefined
        ? calculation.gainOrLoss
        : calculation.capitalIncome !== undefined
          ? calculation.capitalIncome
          : null;

    const row = document.createElement("tr");
    row.className = "event-row";

    const toggleCell = document.createElement("td");
    const toggleBtn = document.createElement("button");
    toggleBtn.type = "button";
    toggleBtn.className = "row-toggle";
    toggleBtn.setAttribute("aria-expanded", "false");
    const chevron = document.createElement("span");
    chevron.className = "row-chevron";
    toggleBtn.appendChild(chevron);
    toggleCell.appendChild(toggleBtn);

    const refCell = document.createElement("td");
    refCell.textContent = entry.triggerReference || event.triggerReference || "--";

    const dateCell = document.createElement("td");
    dateCell.textContent = formatDate(
      primaryPos?.transactionTimestamp || event.transactionTimestamp || event.valueDate
    );

    const isinCell = document.createElement("td");
    isinCell.textContent = primaryPos?.securityId || event.isin || "--";

    const accountCell = document.createElement("td");
    accountCell.textContent = primaryPos?.accountGroupId || event.accountGroupId || "--";

    const nominalCell = document.createElement("td");
    nominalCell.className = "num";
    nominalCell.textContent =
      primaryPos && primaryPos.openNominal !== undefined ? formatNumber(primaryPos.openNominal, 2) : "--";

    const amountCell = document.createElement("td");
    amountCell.className = "num";
    amountCell.textContent =
      primaryPos && primaryPos.openAmount !== undefined ? formatNumber(primaryPos.openAmount, 2) : "--";

    const resultCell = document.createElement("td");
    resultCell.className = "num";
    resultCell.textContent = resultValue !== null ? formatNumber(resultValue, 2) : "--";

    const taxCell = document.createElement("td");
    taxCell.className = "num";
    taxCell.textContent =
      calculation.taxAmount !== undefined ? formatNumber(calculation.taxAmount, 2) : "--";

    const rateCell = document.createElement("td");
    rateCell.className = "num";
    rateCell.textContent = calculation.taxRate !== undefined ? formatPercent(calculation.taxRate) : "--";

    const balanceCell = document.createElement("td");
    balanceCell.className = "num";
    balanceCell.textContent =
      calculation.balance !== undefined ? formatNumber(calculation.balance, 2) : "--";

    const lossPotCell = document.createElement("td");
    lossPotCell.className = "num";
    lossPotCell.textContent =
      stateSnapshot && Object.keys(lossPotEntries).length > 0 ? formatNumber(lossPotTotal, 2) : "--";

    row.append(
      toggleCell,
      refCell,
      dateCell,
      isinCell,
      accountCell,
      nominalCell,
      amountCell,
      resultCell,
      taxCell,
      rateCell,
      balanceCell,
      lossPotCell
    );

    const detailRow = document.createElement("tr");
    detailRow.className = "row-details";
    detailRow.hidden = true;
    detailRow.id = `detail-${idx}`;

    const detailCell = document.createElement("td");
    detailCell.colSpan = columnCount;

    const detailWrapper = document.createElement("div");
    detailWrapper.className = "detail-wrapper";

    const buildDetailSection = (title, payload) => {
      const section = document.createElement("div");
      section.className = "detail-section";
      const heading = document.createElement("div");
      heading.className = "detail-title";
      heading.textContent = title;
      const content = document.createElement("pre");
      content.className = "detail-json";
      content.textContent = JSON.stringify(payload, null, 2);
      section.appendChild(heading);
      section.appendChild(content);
      return section;
    };

    const buildLossPotSection = () => {
      const section = document.createElement("div");
      section.className = "detail-section";
      const heading = document.createElement("div");
      heading.className = "detail-title";
      heading.textContent = stateYear ? `Loss pots (as of ${stateYear})` : "Loss pots";
      section.appendChild(heading);

      const rows = Object.entries(lossPotEntries)
        .map(([year, value]) => [Number(year), Number(value || 0)])
        .filter(([year]) => !Number.isNaN(year))
        .sort((a, b) => a[0] - b[0]);

      if (rows.length === 0) {
        const empty = document.createElement("div");
        empty.className = "detail-empty";
        empty.textContent = "No loss pots available for this event.";
        section.appendChild(empty);
        return section;
      }

      const table = document.createElement("table");
      table.className = "loss-table";
      const thead = document.createElement("thead");
      thead.innerHTML = `
        <tr>
          <th>Year</th>
          <th class="num">Amount</th>
        </tr>
      `;
      const tbody = document.createElement("tbody");
      rows.forEach(([year, value]) => {
        const row = document.createElement("tr");
        const yearCell = document.createElement("td");
        yearCell.textContent = String(year);
        const valueCell = document.createElement("td");
        valueCell.className = "num";
        valueCell.textContent = formatNumber(value, 2);
        row.appendChild(yearCell);
        row.appendChild(valueCell);
        tbody.appendChild(row);
      });
      table.appendChild(thead);
      table.appendChild(tbody);
      section.appendChild(table);
      return section;
    };

    detailWrapper.appendChild(buildLossPotSection());
    detailWrapper.appendChild(buildDetailSection("Customer states", entry.customerStates || {}));
    detailWrapper.appendChild(buildDetailSection("Open positions", entry.openPositions || []));
    detailWrapper.appendChild(buildDetailSection("Calculation", entry.calculation || {}));

    detailCell.appendChild(detailWrapper);
    detailRow.appendChild(detailCell);

    const toggleRow = () => {
      const willOpen = detailRow.hidden;
      detailRow.hidden = !willOpen;
      row.classList.toggle("is-open", willOpen);
      toggleBtn.setAttribute("aria-expanded", willOpen ? "true" : "false");
    };

    toggleBtn.addEventListener("click", (eventClick) => {
      eventClick.stopPropagation();
      toggleRow();
    });

    row.addEventListener("click", () => {
      toggleRow();
    });

    eventTableBody.appendChild(row);
    eventTableBody.appendChild(detailRow);
  });
};

const renderSummary = (outputs, input) => {
  if (!outputs || outputs.length === 0) return;

  const last = outputs[outputs.length - 1];
  const calc = last.calculation || {};
  const taxRegime = input?.clientData?.taxRegime || "AMMINISTRATO";

  const resultValue =
    calc.gainOrLoss !== undefined
      ? calc.gainOrLoss
      : calc.capitalIncome !== undefined
        ? calc.capitalIncome
        : null;
  const resultLabel =
    calc.gainOrLoss !== undefined
      ? "Misc income"
      : calc.capitalIncome !== undefined
        ? "Capital income"
        : "--";

  kpiTaxLabel.textContent = taxRegime === "DICHIARATIVO" ? "Fiscal debt" : "Total tax";
  kpiTax.textContent = calc.taxAmount !== undefined ? formatNumber(calc.taxAmount, 2) : "0.00";
  kpiTaxRate.textContent = `Rate ${calc.taxRate !== undefined ? formatPercent(calc.taxRate) : "--"}`;
  kpiPnl.textContent = resultValue !== null ? formatNumber(resultValue, 2) : "0.00";
  kpiType.textContent = resultLabel;
  kpiPositions.textContent = last.openPositions?.length ?? 0;
  kpiBalance.textContent = `Balance ${calc.balance !== undefined ? formatNumber(calc.balance, 2) : "--"}`;

  const taxBucket = taxRegime === "DICHIARATIVO" ? "fiscal debt" : "total tax";
  const summaryText = resultValue !== null
    ? `Result is ${formatNumber(resultValue, 2)} (${resultLabel.toLowerCase()}). The tax rate is ${formatPercent(calc.taxRate)} and ${taxBucket} is ${formatNumber(calc.taxAmount, 2)}.`
    : "Computation complete. See the JSON output for details.";

  summaryBox.querySelector("p").textContent = summaryText;
};

const compute = () => {
  clearError();
  outputStatus.textContent = "Computing...";
  outputStatus.style.background = "#f3f4f6";
  outputStatus.style.color = "#111827";

  if (!currentCaseId || !CASES[currentCaseId]) {
    showError("Select a case before computing");
    return;
  }

  let input;
  try {
    input = JSON.parse(inputEl.value);
  } catch (err) {
    showError("Invalid JSON. Check brackets, commas, and quotes.");
    return;
  }

  try {
    const outputs = computeScope1Case111(input);
    outputEl.textContent = JSON.stringify(outputs, null, 2);
    renderSummary(outputs, input);
    renderTable(input.events || [], outputs);
    outputStatus.textContent = "Computed";
    outputStatus.style.background = "#f3f4f6";
    outputStatus.style.color = "#111827";
  } catch (err) {
    showError(err.message || "Computation error");
  }
};

document.getElementById("computeBtn").addEventListener("click", compute);
document.getElementById("loadSampleBtn").addEventListener("click", () => {
  if (!currentCaseId) {
    showError("Select a case first");
    return;
  }
  setCaseUI(currentCaseId, { loadSample: true });
  compute();
});

if (scopeList) {
  scopeList.addEventListener("click", (event) => {
    const toggle = event.target.closest(".scope-toggle");
    const caseButton = event.target.closest(".case-item");

    if (toggle) {
      const scopeId = toggle.dataset.scope;
      const allCases = document.querySelectorAll(".scope-cases");
      const allToggles = document.querySelectorAll(".scope-toggle");
      const targetPanel = document.querySelector(`[data-scope-cases=\"${scopeId}\"]`);
      if (!targetPanel) return;

      const willExpand = targetPanel.hidden;

      allCases.forEach((panel) => {
        const isTarget = panel === targetPanel;
        panel.hidden = !isTarget || !willExpand;
      });

      allToggles.forEach((btn) => {
        const isTarget = btn.dataset.scope === scopeId;
        btn.setAttribute("aria-expanded", isTarget && willExpand ? "true" : "false");
        btn.classList.toggle("is-open", isTarget && willExpand);
      });
      return;
    }

    if (caseButton) {
      const caseId = caseButton.dataset.caseId;
      currentCaseId = caseId;
      setCaseUI(caseId, { loadSample: true });
      setSelectedCaseButton(caseId);
      const parentScope = caseButton.closest(".scope-cases");
      if (parentScope) {
        const scopeId = parentScope.dataset.scopeCases;
        const toggleBtn = document.querySelector(`.scope-toggle[data-scope=\"${scopeId}\"]`);
        if (toggleBtn) {
          toggleBtn.classList.add("is-open");
          toggleBtn.setAttribute("aria-expanded", "true");
        }
      }
      compute();
    }
  });
}
document.getElementById("clearBtn").addEventListener("click", () => {
  inputEl.value = "";
  outputEl.textContent = `{
  \"message\": \"Waiting for computation...\"
}`;
  if (eventTableBody) eventTableBody.innerHTML = "";
  summaryBox.querySelector("p").textContent = "Paste your data to generate a simple explanation.";
  kpiTax.textContent = "--";
  kpiTaxRate.textContent = "Rate --";
  kpiPnl.textContent = "--";
  kpiType.textContent = "--";
  kpiPositions.textContent = "--";
  kpiBalance.textContent = "Balance --";
  clearError();
});

document.getElementById("copyBtn").addEventListener("click", () => {
  navigator.clipboard.writeText(outputEl.textContent);
});

compute();
