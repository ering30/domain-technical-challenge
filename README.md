## Visit the Project
Go to [https://domain-technical-challenge.vercel.app/](https://domain-technical-challenge.vercel.app/)

## About This Project
This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app). The project also uses Redux Toolkit, react-hook-forms, TailwindCSS and is deployed on Vercel.

## Local Environment Setup

After cloning the project, install dependences using 'npm install' or similar.
Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Self-Reflection

- Although I think I managed to get everything working properly, I know there are more elegant/clearer ways of writing the code. This is an area I know I need to work on. Similarly in terms of reusability, e.g. I found it was challenging to make the form inputs reusable and also implement validation. 
- In this project I have used react-hook-forms for the first time, which helped a little with validation but at this stage would prefer to use custom hooks for validation as I don't thinkt he package provided enough value to warrant its use this time.
- If given more time I would have extended form validation to check user inputs while typing (onChange) instead of only on submit. I also haven't included any error handling on the file input which may cause usability issues. The form could also be extended to add a button to clear the form and start again. 
- If I were to redo this I would restructure the project to store the hooks inside their own folder, and place the redux provider inside its own folder as well. It's clearer and also makes the hooks easier to find and reuse. 

