# React Native + TypeScript

**Start a new React Native project with TypeScript, Prettier & TSLint**

<p style="color: red">DO NOT INSTALL THIS PACKAGE DIRECTLY</p>

## Usage

When creating a new React Native project, use the command:

```bash
react-native init projectname --template parcmg
cd projectname
node setup.js
npm install
react-native link react-native-gesture-handler
```

That's it! 🎉 Then, proceed as usual:

- `react-native run-ios`

## Includes

- [x] TypeScript
- [x] Prettier (with commit hook)
- [x] TSLint
- [x] Jest
- [x] Redux
- [x] Redux-Saga
- [x] React-Navigation

## Requirements

- `npm i -g react-native-cli`

## Project File Structure

```bash
.
├── LICENSE
├── README.md
├── __tests__
│   └── App.tsx
├── dependencies.json
├── devDependencies.json
├── index.js
├── jest.config.js
├── package.json
├── package.template.json
├── rn-cli.config.js
├── setup.js
├── src
│   ├── @types
│   │   └── index.d.ts
│   ├── App.tsx
│   ├── AppContainers.tsx
│   ├── Bootstrap.tsx
│   ├── components
│   │   ├── README.md
│   │   ├── TodoItem.tsx
│   │   └── index.ts
│   ├── containers
│   │   ├── README.md
│   │   └── RootDrawer.tsx
│   ├── graphics
│   │   ├── README.md
│   │   └── icons
│   │       ├── back.png
│   │       ├── home-focused.png
│   │       ├── home.png
│   │       ├── ordered-list-focused.png
│   │       ├── ordered-list.png
│   │       ├── user-focused.png
│   │       └── user.png
│   ├── helpers
│   │   └── README.md
│   ├── reducers
│   │   ├── app.ts
│   │   ├── index.ts
│   │   └── todo.ts
│   ├── sagas
│   │   └── user.ts
│   ├── screens
│   │   ├── Auth
│   │   │   ├── Signin.tsx
│   │   │   └── Signup.tsx
│   │   ├── Detail.tsx
│   │   ├── README.md
│   │   └── RootTabs
│   │       ├── Home.tsx
│   │       ├── Me.tsx
│   │       └── Todo.tsx
│   ├── services
│   │   ├── README.md
│   │   └── UserService.ts
│   ├── store
│   │   └── index.ts
│   ├── types
│   │   └── index.ts
│   ├── ui
│   │   ├── README.md
│   │   ├── TouchableItem.tsx
│   │   └── index.ts
│   └── utilities
│       └── README.md
├── tsconfig.json
└── tslint.json
```