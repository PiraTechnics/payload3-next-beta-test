Reference Links:

https://github.com/payloadcms/payload-3.0-demo/
https://nextjs.org/blog/next-15-rc
https://react.dev/blog/2024/04/25/react-19-upgrade-guide#installing

Setup:

If you wish to set up a similar project without cloning the setup commit (PLACEHOLDER HERE) of this project, you can follow these instructions to create your own Payload + NextJS project. As of 6/4/2024, this is confirmed working, but as with all beta and RC software in active development, this is subject to change.

This will set up your project connected to MongoDB (either local, on your own cluster, or an Atlas Cluster, your preference)

1. Set up generic Next.js app

`npx create-next-app@latest`

2. cd into project directory and update to Next 15 RC (see link for details)

`npm install next@rc react@rc react-dom@rc`

You will also need to overwite and override the @types/react and @types/node devDependencies if you are using Typescript. Copy paste these into 'devDependencies' in package.json (removing the previous ones)

    	"@types/react": "npm:types-react@19.0.0-beta.2",
    	"@types/react-dom": "npm:types-react-dom@19.0.0-beta.2",

and copy paste the following at the bottom of the same file

    "overrides": {
    	"@types/react": "npm:types-react@19.0.0-beta.2",
    	"@types/react-dom": "npm:types-react-dom@19.0.0-beta.2"
    }

3. Install Payload 3.0 beta into project

`npx create-payload-app@beta`

Follow instructions in the terminal and test working with

`npm run dev`

navigate to localhost:3000/admin, and if sucessful, you will be presented with a 'create new user' form

4. Create git repo, add to Github, and deploy to Vercel

Note: Make sure you add ".env' to your .gitignore, or your secrets will be leaked

5. Customize and Enjoy your new blog!
