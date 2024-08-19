import React from "react";
import { Alert } from "@commerce7/admin-ui";

const AppErrorBoundary = ({ error }) => {
  if (!error) return null;

  const { type, message, errors } = error;
  return (
    <div>
      <Alert variant="error">
        Error: {type} - {message}
        <br></br>
        {errors?.map((error) => {
          return (
            <li>
              {error.field} - {error.message}
            </li>
          );
        })}
      </Alert>
    </div>
  );
};

export default AppErrorBoundary;
