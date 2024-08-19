# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

  npm install
  npm run dev
  npx prettier --write .

Running Locally using Ngrok

If you are planning on running the app using the live app on the frontend and not localhost you need to ngrok the backend to be able to see the docker response

- in API part of the app start the app using the command `ngrok http http://localhost:4000 --subdomain noFraud`
- in frontend change your env to be in ngrok mode, this will change the url that is found in [text](/helpers.js) to hit the provided ngrok url (ex https://noFraud.ngrok.app)
- in dev center listing for the app change the install/uninstall url's to hit the new ngrok url for install and uninstall (ex https://noFraud.ngrok.app/beta/tenant / https://noFraud.ngrok.app/beta/tenant/uninstall)
- run frontend app by using npm run start

If you are planning on developing on the frontend and want to see the local mode of the app

- start the frontend app using npm run start
- go to the page in admin you wish to see the local app on and edit the iframe url to point to the localhost
- in frontend change your env to be in developemtn mode, ensure the file [text](/helpers.js) is pointing to the local, not ngrok, url
