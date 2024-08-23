// // import { v4 as uuidv4 } from 'uuid';

// import { build } from '../../app.js';
// // import { AccountManager } from '../main/account/manager';
// // import { AppManager } from '../main/app/manager';
// // import { dynamodb } from '../main/tax/shipCompliant/dynamodb';
// import { TenantManager } from '../main/tenant/manager';
// // import { TenantXAccountManager } from '../main/tenantXAccount/manager';

// // import {
// //   deleteInventoryLocations,
// //   seedInventoryLocation
// // } from './seeders/_inventoryLocation';
// // import {
// //   deleteNotifications,
// //   seedNotifications
// // } from './seeders/_notifications';
// // import { deletePosProfiles, seedPosProfile } from './seeders/_posProfile';
// // import { deleteSettings, seedSettings } from './seeders/_settings';
// // import {
// //   deleteTransactionEmails,
// //   seedTransactionEmails
// // } from './seeders/_transactionEmails';

// // global.v2ApiPath = '/v2';

// // global.auth = {
// //   username: 'andrewkamphuis2@gmail.com',
// //   usernameData: 'data@gmail.com',
// //   password: 'jubejube2'
// // };

// global.app = build();
// global.tenantId = 'testing';
// // global.tenantId2 = 'testing2';
// // global.appId = 'test';
// // global.appSecret = 'jubejube';
// // global.appIdCustomer = 'customerPermissionsOnly';
// // global.appSecretCustomer = 'customerPermissionsOnly';

// // const authorizationString = `${global.auth.username}:${global.auth.password}`;
// // const authKey = Buffer.from(authorizationString).toString('base64');

// global.headers = {
//   // Authorization: `Basic ${authKey}`,
//   tenantId: global.tenantId
//   // experimental: 'Do not use if you are not Commerce7.  API likely to change'
// };

// // const dataAuthorizationString = `${global.auth.usernameData}:${global.auth.password}`;
// // const dataAuthKey = Buffer.from(dataAuthorizationString).toString('base64');

// // global.dataHeaders = {
// //   Authorization: `Basic ${dataAuthKey}`,
// //   tenantId: global.tenantId,
// //   experimental: 'Do not use if you are not Commerce7.  API likely to change'
// // };

// // const appAuthorizationString = `${global.appId}:${global.appSecret}`;
// // const appAuthKey = Buffer.from(appAuthorizationString).toString('base64');

// // global.appHeaders = {
// //   Authorization: `Basic ${appAuthKey}`,
// //   tenantId: global.tenantId,
// //   experimental: 'Do not use if you are not Commerce7.  API likely to change'
// // };

// // global.headersNoTenant = {
// //   Authorization: `Basic ${authKey}`
// // };

// // global.publicHeaders = {
// //   tenantId: global.tenantId,
// //   experimental: 'Do not use if you are not Commerce7.  API likely to change'
// // };

// before(async () => {
//   await TenantManager.deleteForTestSuite(global.tenantId);
//   //   await TenantManager.deleteForTestSuite(global.tenantId2);
//   const now = new Date();
//   const tenant = {
//     id: global.tenantId,
//     noFraudUsername: 'test',
//     noFraudPassword: 'test',
//     stateCodes: ['WA'],
//     installDate: now.toISOString(),
//     isInstalled: true,
//     lastSyncDate: now.toISOString()
//   };
//   //   const tenant2 = {
//   //     id: global.tenantId2,
//   //     tenant: 'Testing2',
//   //     paymentType: 'Trial',
//   //     planType: 'Demo',
//   //     trialExpirationDate: '2040-01-01T00:00:00.000Z',
//   //     tenantType: 'Commerce7'
//   //   };
//   await TenantManager.createForTestSuite(tenant);
//   //   await TenantManager.createForTestSuite(tenant2);
//   //   await AccountManager.deleteByEmail(global.auth.username);
//   //   await AccountManager.deleteByEmail(global.auth.usernameData);
//   //   await AppManager.deleteForTestSuite(global.appId, global.tenantId);
//   //   await AppManager.deleteForTestSuite(global.appIdCustomer, global.tenantId);

//   //   await dynamodb.deleteAllItems();

//   //   const accountParams = {
//   //     firstName: 'Andrew',
//   //     lastName: 'Kamphuis',
//   //     screenName: 'andrewkamphuis',
//   //     phone: '+16046135343',
//   //     countryCode: 'US',
//   //     email: global.auth.username,
//   //     password: global.auth.password
//   //   };
//   //   const accountTenantParams = {
//   //     tenantId: global.tenantId,
//   //     role: 'Admin Owner'
//   //   };
//   //   const user = {
//   //     id: uuidv4(),
//   //     firstName: 'Test',
//   //     lastName: 'Test'
//   //   };

//   //   const account = await AccountManager.createForTestSuite(
//   //     user,
//   //     accountParams,
//   //     accountTenantParams
//   //   );

//   //   const accountTenant2Params = {
//   //     tenantId: global.tenantId2,
//   //     role: 'Admin Owner'
//   //   };
//   //   await TenantXAccountManager.addTenantForTestSuite(
//   //     accountTenant2Params,
//   //     account.id
//   //   );

//   //   const accountDataParams = { ...account };
//   //   accountDataParams.email = global.auth.usernameData;
//   //   accountDataParams.password = global.auth.password;
//   //   accountDataParams.firstName = 'Account';
//   //   accountDataParams.lastName = 'Data';
//   //   const accountDataTenant = {
//   //     tenantId: global.tenantId,
//   //     role: 'Data'
//   //   };
//   //   const accountData = await AccountManager.createForTestSuite(
//   //     user,
//   //     accountDataParams,
//   //     accountDataTenant
//   //   );

//   global.securityObj = {
//     tenantId: global.tenantId
//     // user: account
//   };
//   //   global.securityObj2 = {
//   //     tenantId: global.tenantId2,
//   //     user: accountData
//   //   };
//   //   global.securityObj.user.reqRole = 'Admin Owner';
//   //   global.securityObj.user.type = 'Account';
//   //   // global.securityObj2.user.reqRole = 'Data';
//   //   // global.securityObj2.user.type = 'Account';

//   //   await seedSettings();
//   //   await seedNotifications();
//   //   await seedTransactionEmails();
//   //   const inventoryLocation = await seedInventoryLocation();
//   //   global.inventoryLocationId = inventoryLocation.id;
//   //   const posProfile = await seedPosProfile(
//   //     global.securityObj,
//   //     global.inventoryLocationId
//   //   );
//   //   global.posProfileId = posProfile.id;
//   //   const appParams = {
//   //     id: global.appId,
//   //     title: 'Andrews First App',
//   //     versions: [
//   //       {
//   //         appId: global.appId,
//   //         versionNumber: 1,
//   //         status: 'Unpublished',
//   //         securities: [
//   //           { id: 'blah', objectType: 'Cart', requestType: 'Full' },
//   //           { id: 'blah', objectType: 'Order', requestType: 'Full' },
//   //           { id: 'blah2', objectType: 'Customer', requestType: 'Full' },
//   //           { id: 'blah2', objectType: 'Note', requestType: 'Full' },
//   //           { id: 'blah3', objectType: 'CustomerAddress', requestType: 'Full' },
//   //           { id: 'blah3', objectType: 'ClubMembership', requestType: 'Full' },
//   //           { id: 'blah3', objectType: 'Product', requestType: 'Full' },
//   //           { id: 'blah3', objectType: 'Reservation', requestType: 'Full' }
//   //         ]
//   //       }
//   //     ]
//   //   };
//   //   await AppManager.createForTestSuite(
//   //     appParams,
//   //     global.appSecret,
//   //     global.tenantId
//   //   );
//   //   const customerApp = {
//   //     id: global.appIdCustomer,
//   //     title: 'Customer App',
//   //     versions: [
//   //       {
//   //         appId: global.appIdCustomer,
//   //         versionNumber: 1,
//   //         status: 'Unpublished',
//   //         securities: [
//   //           { id: 'blah2', objectType: 'Customer', requestType: 'Full' },
//   //           { id: 'blah3', objectType: 'CustomerAddress', requestType: 'Full' }
//   //         ]
//   //       }
//   //     ]
//   //   };
//   //   await AppManager.createForTestSuite(
//   //     customerApp,
//   //     global.appSecretCustomer,
//   //     global.tenantId
//   //   );
//   // });

//   // after(async () => {
//   //   const deleteNotificationsFunction = deleteNotifications();
//   //   const deleteTransactionEmailsFunction = deleteTransactionEmails();
//   //   const deleteSettingsFunction = deleteSettings();
//   //   const deletePOSProfileFunction = deletePosProfiles();
//   //   await Promise.all([
//   //     deleteTransactionEmailsFunction,
//   //     deleteNotificationsFunction,
//   //     deleteSettingsFunction,
//   //     deletePOSProfileFunction
//   //   ]);
//   //   await deleteInventoryLocations();

//   //   await TenantManager.deleteForTestSuite(global.tenantId);
// });
