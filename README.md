# Getting Started

## Installation

```
npm install --save @reactivers/feedbacky-button

yarn add @reactivers/feedbacky-button
```

### For Tailwind

`tailwind.config.js`
```
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@reactivers/feedbacky-button/dist/*.{js,css}"
  ],
  theme: {
    extend: {
    },
  },
  plugins: [],
}
```

## Usage

```ts
<FeedbackProvider url={"https://my.backend.com/api/feedback/create"}>
...
    <Feedback
        feedbackButtonProps={{
            classNames: "fixed right-6 bottom-20"
        }}
    />
...
</FeedbackProvider>
```