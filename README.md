# fence

#### Setup

Run `npm install` in both the frontend and backend folders in dev.

#### Running fence

To run the app, in both fronend and backend folders, run `npm run dev`

The app can be accessed at `localhost:7777` with the GraphQL playground accessible at `localhost:4444`.

#### .env Secrets and Keys

The app won't run without these. If you've been provided the keys, update the .env.sample file in the backend folder with the secrets. Then rename it just '.env'.

#### Currently Available

The influencers overview page is completed. You can see all the influencers in the database at `localhost:7777/influencers` or by using the nav and selecting `influencers`. Here you can create a new influencer via the `+Add a New Influencer` button in the top right. Fill out the info and a new influencer will be created. You can see this new influencer through refreshing the page (appending the new influencer without reload is slotted for later).

To Note:
Images are stored on Cloudinary, which will be the image CDN of choice for this project.

Each influencer links to their corresponding profile page. Currently, these pages show more details about the influencer. The most detailed influencer atm is `Kaspar So`, so select that influencer to get a better overview of what details are stored. Each of the categories are a different query and this component can be found in `frontend/components/InfluencerCard.js`.

Alongside these pages, you can see an overview of the smaller and more granular components at `localhost:7777/components`.
