

StanlonDesign Portfolio
  - Converted a PHP-based portfolio into a static HTML site and deployed it using GitHub → Netlify CI/CD, configuring custom domain management, DNS propagation, HTTPS enforcement, and automated redeploys on commit.

  - I migrated my personal portfolio from a PHP-based setup to a static site and deployed it using GitHub-based continuous deployment on Netlify.

  - The main challenge was separating hosting concerns from domain management — I had an existing domain already live on a manual deploy, and Netlify only allows one project per domain. I had to safely detach the domain, reattach it to the GitHub-connected project, and ensure DNS and HTTPS were correctly propagated.

  - I verified DNS propagation, enforced HTTPS using Let’s Encrypt, and confirmed automatic redeploys on git push. In the end, I had a clean CI/CD workflow where updates go live automatically, which mirrors how production front-end teams deploy static sites  

  - Migrated architectures
  - Understood DNS vs hosting
  - Implemented HTTPS correctly
  - Set up CI/CD
  - Debugged deployment issues

  - Each project in my portfolio is deployed independently using GitHub-based continuous deployment on Netlify.

Add a simple deploy badge + README
![Netlify Status](https://api.netlify.com/api/v1/badges/YOUR_BADGE_ID/deploy-status)


  - Implemented a responsive, serverless contact form using Netlify Forms with spam protection, reCAPTCHA, and custom success redirect. Deployed via controlled manual builds.

  - 