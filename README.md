# Will Golden Zealthy Take Home Assessment

Runbook:

- set node version to 20.
- install packages with yarn package manager (change packageManager value in package.json file to use another package manager).
- set the following env variables:

1. DATABASE_URL (postgres)
2. NEXTAUTH_SECRET (any base 64 encrypted string)
3. NEXTAUTH_URL (url where you are hosting your app)
4. GOOGLE_CLIENT_ID (for google oauth)
5. GOOGLE_CLIENT_SECRET (for google oauth)

- run command:
  `yarn dev`

- navigate to http://localhost:3000
