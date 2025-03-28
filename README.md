# ii-automation-test-scenario
Automation test scenario 
---
## Questions

### 6 most important user journeys on the site: 
- Account Creation
- Search
- Purchase
- Edit Cart
- Order History
- Contact Us
---
### The four user journeys i chose 
- Create Account
- Search
- Purchase
- Edit Cart

### Why:
When I was deciding which user journeys to automate first, I started by asking myself: What are the moments that really matter to both the user and the business? I chose to focus on creating an account, using search, editing the cart, and completing a purchase, because together they form the backbone of the customer journey — from landing on the site to converting into a paying customer.

The create account flow is usually one of the first impressions a user has. If that experience breaks or feels clunky — like throwing confusing errors, rejecting valid inputs, or just being too slow — it can lead to immediate drop-off. So I automated it to make sure we catch those issues early and maintain a smooth onboarding process.

For search, I see it as a critical discovery tool. If users can’t find what they’re looking for quickly and accurately, they’re unlikely to stick around. I wrote automated tests making sure results were relevant and filters were working. It's a great way to ensure users can engage with the full breadth of the catalog.

The cart editing process is something many users interact with just before making a decision. It’s a sensitive part of the flow because if it doesn’t update in real time or something feels broken, it creates frustration and uncertainty. So I focused on making sure all those cart interactions were covered.

And of course, the purchase flow is the most critical piece. It’s where revenue comes in, and it’s also where things like address validation, payment processing, and confirmation messages all come together.
So overall, I chose these journeys because they represent high-impact areas where failure is costly, and success means more conversions, happier users, and fewer customer support issues. Automation here gives fast feedback, protects the business, and helps continuously deliver a solid user experience

---
### Framework and Language
#### Frame work - Playwright 

I chose Playwright for several reasons. First, it's a modern and powerful automation tool that supports multiple browsers out of the box — Chromium, Firefox, and WebKit — which is incredibly valuable for cross-browser testing. It also has excellent support for handling complex scenarios like authentication flows, file uploads, and network mocking, all of which come up regularly in website testing.

#### Programming Language - TypesScript
I decided to write the tests in TypeScript because it adds an extra layer of reliability and maintainability to the code. The type safety helps catch potential issues early, and the improved developer tooling — like autocompletion and inline documentation — speeds up development and reduces errors. It also makes the test suite more accessible to other team members, especially in collaborative environments where clarity and consistency are important

--- 
I would like to add due to time constraints I was unable to write tests for the full breadth of testing that I would usually do when creating an automation suite. However I believe what is here shows my foundations for creating a automation tests.
  
