// eslint-disable-next-line import/prefer-default-export
export const roleCheck = (
  func,
  request,
  reply,
  routeRole,
  appRole,
  customFunction
) => {
  /*eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI5M2UwMDY0OC04NjU3LTQ0YjAtOWI5OC0yZWFlNDE4ZWI4MDIiLCJmaXJzdE5hbWUiOiJBbmRyZXciLCJsYXN0TmFtZSI6IkthbXBodWlzIiwiaWF0IjoxNzIyOTA5MTUzODg0LCJlbWFpbCI6ImFuZHJld0Bjb21tZXJjZTcuY29tIiwidHlwZSI6IkFjY291bnQifQ._U5nq3FDEFpoq14hJ1xSD6yu3NYWMFSheL4WazjkaAc*/

  const { tenantid: tenantId } = request.headers;

  request.securityObj = {
    tenantId
  };
  //   const { user, tenantPaymentType, tenantType } = request.securityObj;

  //   let isValidRole = false;
  //   if (user.type === 'App') {
  //     isValidRole = roleCheckApp(user, appRole, request);
  //   } else {
  //     isValidRole = roleCheckUser(
  //       routeRole,
  //       user,
  //       tenantPaymentType,
  //       tenantType,
  //       request
  //     );
  //   }

  //   if (!isValidRole) {
  //     throw new CustomError(401, 'Unauthorized User For Route', 'unauthorized');
  //   }

  //   if (customFunction) {
  //     customFunction(user);
  //   }

  return func(request, reply);
};
