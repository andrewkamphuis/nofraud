/* eslint-disable max-len */
// eslint-disable-next-line import/prefer-default-export
export const c7Orders = () => {
  const response = {
    orders: [
      {
        id: '0029bf07-8d73-40b3-bdd0-268927a78268',
        orderSubmittedDate: '2022-11-30T20:30:18.128Z',
        orderPaidDate: '2022-11-30T20:30:18.128Z',
        orderFulfilledDate: '2022-11-30T20:30:19.583Z',
        orderNumber: 1297,
        orderSource: 'Internal',
        customerType: 'Club Member',
        purchaseType: 'Regular',
        previousOrderId: null,
        previousOrderNumber: null,
        refundOrderId: null,
        refundOrderNumber: null,
        linkedOrders: [],
        paymentStatus: 'Paid',
        complianceStatus: 'No Compliance Required',
        fraudCheckStatus: 'Not Checked',
        fulfillmentStatus: 'Fulfilled',
        shippingStatus: 'Not Tracked',
        cartId: '0029bf07-8d73-40b3-bdd0-268927a78268',
        channel: 'POS',
        posProfileId: 'a29b9b4e-d7f2-4261-8126-75baf00ce7c7',
        customerId: '07214845-5200-4b1e-9a5c-728be7c96622',
        orderDeliveryMethod: 'Carry Out',
        shippingInstructions: null,
        taxSaleType: 'Onsite',
        subTotal: 9350,
        shipTotal: 0,
        taxTotal: 1404,
        dutyTotal: 0,
        bottleDepositTotal: 0,
        tipTotal: 0,
        total: 10754,
        totalAfterTip: 10754,
        giftMessage: null,
        metaData: null,
        appData: null,
        appSync: null,
        flags: [],
        isNonTaxable: false,
        isNoDuty: false,
        loyaltyPointsEarned: 0,
        createdAt: '2022-11-30T15:09:55.289Z',
        updatedAt: '2022-11-30T20:30:19.895Z',
        additionalData: null,
        club: null,
        reservation: null,
        shipping: [],
        coupons: [],
        shipTo: null,
        billTo: {
          id: '86d5f49c-3ebb-4156-b672-cc240bdebdae',
          customerAddressId: '71f55aaa-9d30-4102-ba14-30fece7f8c9c',
          birthDate: null,
          honorific: null,
          firstName: 'Zach',
          lastName: 'Kamphuis',
          company: '',
          phone: '+16042175161',
          address: '1178 Hamilton Street',
          address2: 'PH5',
          city: 'Vancouver',
          stateCode: 'BC',
          zipCode: 'V6B2S2',
          countryCode: 'CA'
        },
        pickupBy: null,
        carrierPickupLocation: null,
        carryOut: {
          id: '9e123224-d893-4705-84dc-e912b647b459',
          inventoryLocationId: '74751ef8-990d-440f-a146-416543ae1285',
          customerAddressId: null,
          birthDate: null,
          honorific: null,
          firstName: null,
          lastName: null,
          company: null,
          phone: '+16046135343',
          address: '1000 North Street',
          address2: '',
          city: 'Vancouver',
          stateCode: 'BC',
          zipCode: 'V6G0C3',
          countryCode: 'CA'
        },
        promotions: [
          {
            id: 'b8637df6-579a-4d93-a700-4565c36d3471',
            promotionId: '477ce28a-fd2f-42e3-b3be-674002247d28',
            title: 'Club Discount',
            inUse: true,
            productValue: 1650,
            shippingValue: 0,
            totalValue: 1650
          }
        ],
        tenders: [
          {
            id: 'fbee734a-315f-482f-936e-dbf28def2999',
            previousTenderId: null,
            tenderType: 'Credit Card',
            chargeType: 'Sale',
            chargeStatus: 'Success',
            amountTendered: 10754,
            tip: 0,
            errorCode: '',
            paymentDate: '2022-11-30T20:30:17.493Z',
            otherPaymentMethod: null,
            createdAt: '2022-11-30T20:30:06.541Z',
            updatedAt: '2022-11-30T20:30:18.774Z',
            creditCard: {
              gateway: 'Stripe',
              cardBrand: 'MasterCard',
              maskedCardNumber: '************5454',
              bin: null,
              expiryMo: 1,
              expiryYr: 2025,
              cardHolderName: '',
              oneTimeToken: null,
              tokenOnFile: '07214845-5200-4b1e-9a5c-728be7c96622',
              processorResponse:
                '{"id":"pi_3M9wv5IJRvx8CZtk0o5tTobc","object":"payment_intent","allowed_source_types":["card"],"amount":10754,"amount_capturable":0,"amount_details":{"tip":{}},"amount_received":10754,"application":"ca_FUmYNhEsURiD3M9JYcxZ1ZHTAkx6c3Xw","application_fee_amount":null,"automatic_payment_methods":null,"canceled_at":null,"cancellation_reason":null,"capture_method":"automatic","charges":{"object":"list","data":[{"id":"ch_3M9wv5IJRvx8CZtk01CtJfal","object":"charge","amount":10754,"amount_captured":10754,"amount_refunded":0,"application":"ca_FUmYNhEsURiD3M9JYcxZ1ZHTAkx6c3Xw","application_fee":null,"application_fee_amount":null,"balance_transaction":"txn_3M9wv5IJRvx8CZtk0zuzADWG","billing_details":{"address":{"city":null,"country":null,"line1":null,"line2":null,"postal_code":null,"state":null},"email":null,"name":null,"phone":null},"calculated_statement_descriptor":"JASON ANDRES","captured":true,"created":1669840216,"currency":"cad","customer":"07214845-5200-4b1e-9a5c-728be7c96622","description":null,"destination":null,"dispute":null,"disputed":false,"failure_balance_transaction":null,"failure_code":null,"failure_message":null,"fraud_details":{},"invoice":null,"livemode":false,"metadata":{},"on_behalf_of":null,"order":null,"outcome":{"network_status":"approved_by_network","reason":null,"risk_level":"normal","risk_score":12,"seller_message":"Payment complete.","type":"authorized"},"paid":true,"payment_intent":"pi_3M9wv5IJRvx8CZtk0o5tTobc","payment_method":"pm_1JwJY4IJRvx8CZtk8IRXtSdZ","payment_method_details":{"card":{"brand":"mastercard","checks":{"address_line1_check":null,"address_postal_code_check":null,"cvc_check":null},"country":"US","exp_month":1,"exp_year":2025,"fingerprint":"rRx2WUZpedN1EYLB","funding":"credit","installments":null,"last4":"5454","mandate":null,"moto":null,"network":"mastercard","three_d_secure":null,"wallet":null},"type":"card"},"receipt_email":null,"receipt_number":null,"receipt_url":"https://pay.stripe.com/receipts/payment/CAcaFwoVYWNjdF8xSXd3ZGNJSlJ2eDhDWnRrKNn6npwGMgZQtQBK3mQ6LBbW0O0pF1Tw8IAQCeswfy4Pf56gUXLpyguCPktl353Gz9buGD_4b4SffQdb","refunded":false,"refunds":{"object":"list","data":[],"has_more":false,"total_count":0,"url":"/v1/charges/ch_3M9wv5IJRvx8CZtk01CtJfal/refunds"},"review":null,"shipping":null,"source":null,"source_transfer":null,"statement_descriptor":null,"statement_descriptor_suffix":null,"status":"succeeded","transfer_data":null,"transfer_group":null}],"has_more":false,"total_count":1,"url":"/v1/charges?payment_intent=pi_3M9wv5IJRvx8CZtk0o5tTobc"},"client_secret":"pi_3M9wv5IJRvx8CZtk0o5tTobc_secret_zUsPVwZ8mIAgPvQomV9pMvAGL","confirmation_method":"automatic","created":1669840215,"currency":"cad","customer":"07214845-5200-4b1e-9a5c-728be7c96622","description":null,"invoice":null,"last_payment_error":null,"livemode":false,"metadata":{},"next_action":null,"next_source_action":null,"on_behalf_of":null,"payment_method":"pm_1JwJY4IJRvx8CZtk8IRXtSdZ","payment_method_options":{"card":{"installments":null,"mandate_options":null,"network":null,"request_three_d_secure":"automatic"}},"payment_method_types":["card"],"processing":null,"receipt_email":null,"review":null,"setup_future_usage":null,"shipping":null,"source":null,"statement_descriptor":null,"statement_descriptor_suffix":null,"status":"succeeded","transfer_data":null,"transfer_group":null}',
              authorizationId: 'ch_3M9wv5IJRvx8CZtk01CtJfal',
              customerCreditCardId: '9f67b736-52cb-4955-afe4-148c7293e729'
            },
            giftCard: {
              id: null,
              maskedCode: null,
              transactionId: null
            },
            loyalty: {
              points: 0,
              transactionId: null
            }
          }
        ],
        fulfillments: [
          {
            id: 'a4aa9f7c-8124-4204-8dc1-7a97ea4563ef',
            inventoryLocationId: null,
            type: 'Picked Up',
            fulfillmentDate: '2022-11-30T20:30:19.583Z',
            packageCount: 1,
            items: [
              {
                id: '1dae39a3-9b54-40e2-9138-f882e08793f8',
                quantityFulfilled: 1
              },
              {
                id: 'a8522620-ea86-433f-bc38-5212fbadf2d0',
                quantityFulfilled: 1
              }
            ],
            pickedUp: {
              pickedUpBy: 'Carry Out'
            }
          }
        ],
        taxes: [
          {
            id: '491b7e0c-9980-4dfb-a1ff-6bb63c276010',
            vendor: 'Local',
            title: 'GST',
            countryCode: 'CA',
            stateCode: null,
            freight: 5,
            food: 5,
            generalMerchandise: 5,
            cannabis: 0,
            wine: 5,
            price: 468,
            isIncludedInPrice: false,
            isFlatRate: false,
            isNonTaxable: false,
            sortOrder: 0
          },
          {
            id: '8376bed4-802c-4b03-a8a6-d2323e81715a',
            vendor: 'Local',
            title: 'PST',
            countryCode: 'CA',
            stateCode: 'BC',
            freight: 7,
            food: 0,
            generalMerchandise: 7,
            cannabis: 0,
            wine: 10,
            price: 936,
            isIncludedInPrice: false,
            isFlatRate: false,
            isNonTaxable: false,
            sortOrder: 0
          }
        ],
        duties: [],
        posProfile: {
          id: 'a29b9b4e-d7f2-4261-8126-75baf00ce7c7',
          title: 'CA Tasting Room',
          isDefault: true,
          carryOutInventoryLocationId: '74751ef8-990d-440f-a146-416543ae1285',
          pickupInventoryLocationId: '74751ef8-990d-440f-a146-416543ae1285',
          shipInventoryLocationId: 'b3242f9d-5e81-4c20-b41b-678683fc58f0',
          hasTips: true,
          tipType: 'Percentages',
          tipAmounts: [1000, 1500, 2000],
          tipPercentages: [5, 10, 15],
          isTipOnDevice: false,
          allowPinsForSwitchingUsers: false,
          forceLoginAfterOrder: false,
          forceLoginBeforeCheckout: false,
          forceMoreInfo: false,
          forceSendItemsToPrep: false,
          color: 'No Color',
          isSendToPrepPrinter: true,
          isAssignTable: true,
          printReceiptFormat: 'Default Receipt',
          createdAt: '2021-06-16T16:23:44.448Z',
          updatedAt: '2023-09-18T16:30:32.144Z'
        },
        customer: {
          id: '07214845-5200-4b1e-9a5c-728be7c96622',
          avatar: null,
          honorific: null,
          firstName: 'Zach',
          lastName: 'Kamphuis',
          birthDate: null,
          city: 'Vancouver',
          stateCode: 'BC',
          zipCode: 'V6B2S2',
          countryCode: 'CA',
          emailMarketingStatus: null,
          lastActivityDate: '2022-08-24T23:31:56.944Z',
          metaData: {
            title: null,
            'dogs-name': null,
            'friends-name': null,
            'spouses-name-': 'Camille',
            'referral-type-': null,
            'has-visited-the-winery': false
          },
          appData: {
            emetry: {
              segment: 'Top Performer',
              attritionProbability: 0
            }
          },
          appSync: null,
          flags: [
            {
              id: '4ef36c9c-92d5-4ddb-8c85-5b46d08e95d3',
              content:
                'Fall goes to this location\nSpring goes to this location'
            }
          ],
          notifications: [
            {
              id: '6fa22a64-8c92-4d43-a49a-d04dbf70dd89',
              data: null,
              type: 'Order To Be Picked Up',
              content: 'Order #1478 is awaiting pickup.',
              objectId: '7e6e4819-b6d7-4118-b266-4b3e5f6855d1'
            }
          ],
          createdAt: '2021-11-16T04:43:55.922Z',
          updatedAt: '2024-03-08T17:37:41.387Z',
          orderInformation: {
            currentWebCartId: null,
            lastOrderId: 'b2f09e29-c771-4dfe-8511-846a501fa711',
            lastOrderDate: '2024-03-08T17:37:38.975Z',
            orderCount: 245,
            lifetimeValue: 4627743,
            lifetimeValueSeedAmount: 0,
            yearlyValue: {
              2021: 245448,
              2022: 3197703,
              2023: 1163477,
              2024: 21115
            },
            rank: 0,
            rankTrend: null,
            grossProfit: 3906660,
            acquisitionChannel: 'Web',
            currentClubTitle: 'Spectra Club 2023',
            daysInCurrentClub: 252,
            daysInClub: 989,
            isActiveClubMember: true
          },
          loyalty: {
            tier: 'Diamond Tier',
            loyaltyTierId: '600323ed-a53b-436d-bc6d-e60467c66433',
            points: 99205
          },
          emails: [
            {
              id: '9d15e7e9-5a9e-4f71-9a19-83d94324600d',
              email: 'zach@commerce7.com',
              status: 'Ok'
            }
          ],
          phones: [
            {
              id: '10ad7c8a-2986-45c5-b1b2-3ebd0a410b43',
              phone: '+16042175161'
            }
          ],
          clubs: [
            {
              clubId: 'ac13f29f-d46a-4b46-8714-f83329220d5b',
              clubTitle: 'Spectra Club 2023',
              cancelDate: '2023-08-03T18:52:40.082Z',
              signupDate: '2021-11-16T04:45:56.112Z',
              clubMembershipId: '3b296d6a-f09d-4a65-9556-1c5ceeb4cd94'
            },
            {
              clubId: 'c91147ae-b827-417d-be74-2b911384a1ed',
              clubTitle: 'Spectra Wine Subscription',
              frequency: 3,
              cancelDate: '2021-12-15T23:57:34.390Z',
              signupDate: '2021-12-09T22:17:08.692Z',
              clubMembershipId: '8820e8ec-8c15-440e-8f97-cd6564bd1cf9'
            },
            {
              clubId: 'ac13f29f-d46a-4b46-8714-f83329220d5b',
              clubTitle: 'Spectra Club 2023',
              cancelDate: '2023-08-03T18:52:36.057Z',
              signupDate: '2022-01-31T22:08:04.642Z',
              clubMembershipId: '46329f14-21e9-4dc6-94a0-8859d1b744b9'
            },
            {
              clubId: 'ac13f29f-d46a-4b46-8714-f83329220d5b',
              clubTitle: 'Spectra Club 2023',
              cancelDate: '2023-08-03T18:52:32.053Z',
              signupDate: '2022-02-28T19:30:35.231Z',
              clubMembershipId: '111924e5-553a-4360-9011-d46f44368a8d'
            },
            {
              clubId: 'ac13f29f-d46a-4b46-8714-f83329220d5b',
              clubTitle: 'Spectra Club 2023',
              cancelDate: '2023-08-03T18:52:27.713Z',
              signupDate: '2023-01-10T18:17:08.496Z',
              clubMembershipId: 'f2874119-4899-4871-8217-4081de645be0'
            },
            {
              clubId: 'ac13f29f-d46a-4b46-8714-f83329220d5b',
              clubTitle: 'Spectra Club 2023',
              cancelDate: null,
              signupDate: '2023-03-16T01:49:59.100Z',
              clubMembershipId: '07eb1ae4-9aa6-4a5d-a24f-2303317cb3ee'
            },
            {
              clubId: 'ac13f29f-d46a-4b46-8714-f83329220d5b',
              clubTitle: 'Spectra Club 2023',
              cancelDate: null,
              signupDate: '2023-11-22T18:37:18.503Z',
              clubMembershipId: 'b01eafc3-107c-47b6-95d2-95cc0333a8d4'
            }
          ],
          products: [
            {
              product: {
                sku: '2015CSR',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauvreserve-1663026733641.png',
                price: 2750,
                title: '2015 Reserve Cabernet Sauvignon',
                quantity: -1,
                productId: 'b2ac93d5-d0f4-4b0d-8899-dda38138f53e',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2015,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2024-03-08T17:37:38.975Z'
            },
            {
              product: {
                sku: '2016PG',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-pinotgris-1663026770603.png',
                price: 2750,
                title: '2016 Pinot Gris',
                quantity: 1,
                productId: '69cf1e52-0f89-4727-bca7-e17046a1f9cb',
                wineProperties: {
                  type: 'White',
                  region: 'Oregon',
                  vintage: 2016,
                  varietal: 'Pinot Gris',
                  appellation: 'Elkton Oregon',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2024-03-08T17:37:38.975Z'
            },
            {
              product: {
                sku: '2015CSR',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauvreserve-1663026733641.png',
                price: 2750,
                title: '2015 Reserve Cabernet Sauvignon',
                quantity: 2,
                productId: 'b2ac93d5-d0f4-4b0d-8899-dda38138f53e',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2015,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2024-01-31T08:01:04.578Z'
            },
            {
              product: {
                sku: '2015C',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-chardonnay-1663026658939.png',
                price: 1750,
                title: '2015 Chardonnay',
                quantity: 2,
                productId: 'bf900739-cfbe-437e-923d-ec87c6401f95',
                wineProperties: {
                  type: 'White',
                  region: 'Washington',
                  vintage: 2015,
                  varietal: 'Chardonnay',
                  appellation: 'Walla Walla Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2024-01-31T08:01:04.578Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 1200,
                title: '2016 Rosé',
                quantity: 2,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2024-01-31T08:01:04.578Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 2750,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: 2,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2024-01-18T17:16:54.670Z'
            },
            {
              product: {
                sku: 'GT',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/theme-photos-mr_lv_g7xcy-unsplash-1629260444535.jpg',
                price: 750,
                title: 'Spectra Tasting',
                quantity: 2,
                productId: '72863684-dcb9-4af6-b4a8-d63623a1585b'
              },
              purchaseDate: '2023-12-13T17:37:44.725Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 1200,
                title: '2016 Rosé',
                quantity: 14,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-12-13T17:27:25.835Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 2750,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: 2,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-12-13T17:25:15.406Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 1200,
                title: '2016 Rosé',
                quantity: 4,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-12-13T17:25:15.406Z'
            },
            {
              product: {
                sku: '2016CSR',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauvreserve-1663026780065.png',
                price: 4675,
                title: '2016 Reserve Cabernet Sauvignon',
                quantity: -1,
                productId: '7d4c8982-88dd-4a72-a3e7-694ed09b62cf',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2015,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-29T19:39:40.629Z'
            },
            {
              product: {
                sku: 'ET',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/dave-lastovskiy-rygidtavhkq-unsplash-1629260412290.jpg',
                price: 1275,
                title: 'Estate Tour & Tasting',
                quantity: 1,
                productId: '9f1e7e1a-dd6d-47c1-abf7-7f2e40baaf2a'
              },
              purchaseDate: '2023-11-24T11:45:34.759Z'
            },
            {
              product: {
                sku: '2016CSR',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauvreserve-1663026780065.png',
                price: 4675,
                title: '2016 Reserve Cabernet Sauvignon',
                quantity: 2,
                productId: '7d4c8982-88dd-4a72-a3e7-694ed09b62cf',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2015,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-22T19:19:31.170Z'
            },
            {
              product: {
                sku: 'PT',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/karsten-wurth-49aqgxkoro4-unsplash-1629260434603.jpg',
                price: 5100,
                title: 'Private Tasting',
                quantity: 1,
                productId: '3cfe3478-e43c-4fbc-b830-286470eea8e1'
              },
              purchaseDate: '2023-11-22T18:40:02.452Z'
            },
            {
              product: {
                sku: 'rc2016-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-chardonnay-1663026658939.png',
                price: 2040,
                title: '2016 Chardonnay duplicate',
                quantity: 2,
                productId: '9e633509-c290-4c1a-970b-d453d2648224',
                wineProperties: {
                  type: 'White',
                  region: 'Washington',
                  vintage: 2015,
                  varietal: 'Chardonnay',
                  appellation: 'Walla Walla Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-22T18:37:18.496Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: 2,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-11-22T18:37:18.496Z'
            },
            {
              product: {
                sku: '2016CSR',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauvreserve-1663026780065.png',
                price: 4675,
                title: '2016 Reserve Cabernet Sauvignon',
                quantity: 1,
                productId: '7d4c8982-88dd-4a72-a3e7-694ed09b62cf',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2015,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-22T18:37:18.496Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2400,
                title: '2016 Rosé',
                quantity: 1,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-11-16T21:31:22.324Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 5500,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: 3,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-16T21:31:22.324Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 4675,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: -1,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-16T18:35:14.011Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: -2,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-11-16T18:35:14.011Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 4675,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: 1,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-15T23:48:13.548Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: 2,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-11-15T23:48:13.548Z'
            },
            {
              product: {
                sku: 'PT',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/karsten-wurth-49aqgxkoro4-unsplash-1629260434603.jpg',
                price: 5100,
                title: 'Private Tasting',
                quantity: 1,
                productId: '3cfe3478-e43c-4fbc-b830-286470eea8e1'
              },
              purchaseDate: '2023-11-15T20:01:06.130Z'
            },
            {
              product: {
                sku: '15Cha',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-chardonnay-1663026658939.png',
                price: 4250,
                title: '2015 Chardonnay',
                quantity: 1,
                productId: 'bf900739-cfbe-437e-923d-ec87c6401f95',
                wineProperties: {
                  type: 'White',
                  region: 'Washington',
                  vintage: 2015,
                  varietal: 'Chardonnay',
                  appellation: 'Walla Walla Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-14T20:29:19.813Z'
            },
            {
              product: {
                sku: '2016PG',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-pinotgris-1663026770603.png',
                price: 2210,
                title: '2016 Pinot Gris',
                quantity: 1,
                productId: '69cf1e52-0f89-4727-bca7-e17046a1f9cb',
                wineProperties: {
                  type: 'White',
                  region: 'Oregon',
                  vintage: 2016,
                  varietal: 'Pinot Gris',
                  appellation: 'Elkton Oregon',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-13T20:19:52.480Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: -1,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-11-13T20:19:52.480Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 4675,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: -1,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-13T20:19:52.480Z'
            },
            {
              product: {
                sku: '2016CSR',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauvreserve-1663026780065.png',
                price: 4675,
                title: '2016 Reserve Cabernet Sauvignon',
                quantity: 1,
                productId: '7d4c8982-88dd-4a72-a3e7-694ed09b62cf',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2015,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-08T23:39:43.314Z'
            },
            {
              product: {
                sku: 'rc2016-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-chardonnay-1663026658939.png',
                price: 2040,
                title: '2016 Chardonnay duplicate',
                quantity: 1,
                productId: '9e633509-c290-4c1a-970b-d453d2648224',
                wineProperties: {
                  type: 'White',
                  region: 'Washington',
                  vintage: 2015,
                  varietal: 'Chardonnay',
                  appellation: 'Walla Walla Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-08T23:39:43.314Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: 1,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-11-08T23:28:54.330Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 4675,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: 5,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-11-08T23:28:54.330Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2400,
                title: '2016 Rosé',
                quantity: 4,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-10-31T17:48:44.978Z'
            },
            {
              product: {
                sku: '2016CR',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-reservechard-1663026789922.png',
                price: 3825,
                title: '2016 Reserve Chardonnay',
                quantity: 2,
                productId: '2f360b3a-54d1-497e-aa8c-fc8a5d040f37',
                wineProperties: {
                  type: 'White',
                  region: 'Washington',
                  vintage: 2015,
                  varietal: 'Chardonnay',
                  appellation: 'Walla Walla Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-10-31T07:07:59.102Z'
            },
            {
              product: {
                sku: '2015PNR',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-pinotnoirreserve-1663026746471.png',
                price: 2890,
                title: '2015 Reserve Pinot Noir',
                quantity: 2,
                productId: '4818393f-30b6-4fa0-8f92-abed18ca29d7',
                wineProperties: {
                  type: 'Red',
                  region: 'Texas',
                  vintage: 2015,
                  varietal: 'Pinot Noir',
                  appellation: 'Fredericksburg in the Texas Hill Country',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-10-31T07:07:59.102Z'
            },
            {
              product: {
                sku: '2015CSR',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauvreserve-1663026733641.png',
                price: 4675,
                title: '2015 Reserve Cabernet Sauvignon',
                quantity: 2,
                productId: 'b2ac93d5-d0f4-4b0d-8899-dda38138f53e',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2015,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-10-31T07:07:59.102Z'
            },
            {
              product: {
                sku: '15Cha',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-chardonnay-1663026658939.png',
                price: 4250,
                title: '2015 Chardonnay',
                quantity: 1,
                productId: 'bf900739-cfbe-437e-923d-ec87c6401f95',
                wineProperties: {
                  type: 'White',
                  region: 'Washington',
                  vintage: 2015,
                  varietal: 'Chardonnay',
                  appellation: 'Walla Walla Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-10-25T16:31:37.872Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: -6,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-10-25T16:31:37.872Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: 12,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-10-25T16:30:47.658Z'
            },
            {
              product: {
                sku: 'rc2016-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-chardonnay-1663026658939.png',
                price: 2040,
                title: '2016 Chardonnay duplicate',
                quantity: 1,
                productId: '9e633509-c290-4c1a-970b-d453d2648224',
                wineProperties: {
                  type: 'White',
                  region: 'Washington',
                  vintage: 2015,
                  varietal: 'Chardonnay',
                  appellation: 'Walla Walla Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-10-25T16:24:52.240Z'
            },
            {
              product: {
                sku: '25Virtual',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/gift-card-1698241099587.jpeg',
                price: 2125,
                title: 'Virtual Gift Card',
                quantity: 1,
                productId: '21c4cbf3-e448-4b91-9960-8f861bae88c2'
              },
              purchaseDate: '2023-10-25T16:17:30.090Z'
            },
            {
              product: {
                sku: '25Virtual',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/gift-card-1698241099587.jpeg',
                price: 2125,
                title: 'Virtual Gift Card',
                quantity: 1,
                productId: '21c4cbf3-e448-4b91-9960-8f861bae88c2'
              },
              purchaseDate: '2023-10-25T13:41:23.426Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 4675,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: 5,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-10-23T22:22:04.812Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: 1,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-10-23T22:22:04.812Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 4675,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: 1,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-10-23T18:08:50.407Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: 5,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-10-23T18:08:50.407Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: 1,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-10-16T19:29:38.310Z'
            },
            {
              product: {
                sku: '2015CS-duplicate',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauv-1663026763140.png',
                price: 4675,
                title: '2016 Cabernet Sauvignon duplicate',
                quantity: 5,
                productId: '9a93b56a-f56d-4b45-b5b5-808a9a1de9cd',
                wineProperties: {
                  type: 'Red',
                  region: 'California',
                  vintage: 2016,
                  varietal: 'Cabernet Sauvignon',
                  appellation: 'Napa Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-10-16T19:29:38.310Z'
            },
            {
              product: {
                sku: '2015Rose',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-rose-1663026797244-1665601501929.png',
                price: 2040,
                title: '2016 Rosé',
                quantity: -2,
                productId: '08c0c9e4-79d1-44b6-b2e8-f8b0b3fdcba8',
                wineProperties: {
                  type: 'Rose',
                  region: 'Ontario',
                  vintage: 2016,
                  varietal: 'Rose',
                  appellation: 'Niagara Peninsula',
                  countryCode: 'CA'
                }
              },
              purchaseDate: '2023-10-13T21:46:16.418Z'
            },
            {
              product: {
                sku: '15Cha',
                image:
                  'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-chardonnay-1663026658939.png',
                price: 4250,
                title: '2015 Chardonnay',
                quantity: 3,
                productId: 'bf900739-cfbe-437e-923d-ec87c6401f95',
                wineProperties: {
                  type: 'White',
                  region: 'Washington',
                  vintage: 2015,
                  varietal: 'Chardonnay',
                  appellation: 'Walla Walla Valley',
                  countryCode: 'US'
                }
              },
              purchaseDate: '2023-10-13T21:46:16.418Z'
            }
          ],
          hasAccount: true,
          loginActivity: {
            lastLoginAt: '2024-01-18T20:40:05.392Z',
            loginIP: '67.23.203.37',
            lastLogoutAt: '2024-01-18T20:25:41.047Z'
          }
        },
        items: [
          {
            id: '1dae39a3-9b54-40e2-9138-f882e08793f8',
            purchaseType: 'Regular',
            productTitle: '2016 Reserve Cabernet Sauvignon',
            productSlug: '2016-reserve-cabernet-sauvignon',
            type: 'Wine',
            inventoryLocationId: null,
            productId: '7d4c8982-88dd-4a72-a3e7-694ed09b62cf',
            productVariantTitle: '750ml',
            productVariantId: '2f2d065b-420c-4f86-b2f9-7a55f019bbc9',
            image:
              'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauvreserve-1663026780065.png',
            sku: '2016CSR',
            costOfGood: 0,
            price: 4675,
            originalPrice: 5500,
            comparePrice: 5500,
            bottleDeposit: 0,
            quantity: 1,
            quantityFulfilled: 1,
            quantitySentToPrep: 0,
            isPriceOverride: false,
            tax: 702,
            taxType: 'Wine',
            weight: 3,
            hasShipping: true,
            vendor: null,
            volumeInML: 750,
            departmentCode: 'wine',
            allocationId: null,
            departmentId: 'a94d504a-2b19-4ac2-b1c2-ec51857b9d29',
            collectionIds:
              '0189d464-86e5-4194-8fd9-8f547e3eb93b,a24ad9fc-8531-4ca8-b390-c8e07efe1627,ad5ebcdc-b448-4b36-9df5-b7e39d682c45,c13454c4-f7e2-4514-a274-94adb1c45f6d',
            bundleItems: null,
            itemData: null,
            modifiers: null,
            notes: null
          },
          {
            id: 'a8522620-ea86-433f-bc38-5212fbadf2d0',
            purchaseType: 'Regular',
            productTitle: '2015 Reserve Cabernet Sauvignon',
            productSlug: '2015-reserve-cabernet-sauvignon',
            type: 'Wine',
            inventoryLocationId: null,
            productId: 'b2ac93d5-d0f4-4b0d-8899-dda38138f53e',
            productVariantTitle: '750ml',
            productVariantId: 'cd032fc2-aea9-4e32-9f48-f2f12b23f66a',
            image:
              'https://images.commerce7.com/spectra-winery-demo-v2/images/original/c7-cabsauvreserve-1663026733641.png',
            sku: '2015CSR',
            costOfGood: 0,
            price: 4675,
            originalPrice: 5500,
            comparePrice: 5500,
            bottleDeposit: 0,
            quantity: 1,
            quantityFulfilled: 1,
            quantitySentToPrep: 0,
            isPriceOverride: false,
            tax: 702,
            taxType: 'Wine',
            weight: 3,
            hasShipping: true,
            vendor: null,
            volumeInML: 750,
            departmentCode: 'wine',
            allocationId: '519c7fa7-30ed-421f-bc68-08fbbdeeb1cc',
            departmentId: 'a94d504a-2b19-4ac2-b1c2-ec51857b9d29',
            collectionIds:
              '0189d464-86e5-4194-8fd9-8f547e3eb93b,a24ad9fc-8531-4ca8-b390-c8e07efe1627,ad5ebcdc-b448-4b36-9df5-b7e39d682c45,c13454c4-f7e2-4514-a274-94adb1c45f6d',
            bundleItems: null,
            itemData: null,
            modifiers: null,
            notes: null
          }
        ],
        selectedShippingOptions: {
          shippingServiceId: null
        },
        connectionInformation: {
          customerIpAddress: '108.180.31.39',
          userAgent:
            'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/107.0.0.0 Safari/537.36'
        },
        fraud: {
          isFraudulent: false,
          comment: null
        },
        salesAssociate: {
          accountId: 'a1ec0e2f-3412-4980-8109-d8d4ad193e90',
          name: 'Zach Kamphuis'
        },
        tags: [],
        orderTags: []
      }
    ]
    // cursor: '19f62f3e-a484-429e-9fd6-d1b600134e6b'
  };
  return response;
};
