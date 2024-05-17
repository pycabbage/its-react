// eslint-disable-next-line no-undef
module.exports = function (
  /** @type {import('plop').NodePlopAPI} */
  plop
) {
  plop.setGenerator('component', {
    description: 'react component',
    prompts: [
      // 入力させたい値につけたnameをactionsやtemplate内で参照できます
      {
        type: 'input',
        name: 'index',
        message: 'challenge index',
      },
      {
        type: 'input',
        name: 'name',
        message: 'component name',
      },
    ],
    actions: [
      {
        type: 'add',
        path: 'src/stories/challenge{{index}}/index.tsx',
        templateFile: 'plop-templates/component/index.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/stories/challenge{{index}}/{{pascalCase name}}.tsx',
        templateFile: 'plop-templates/component/Component.tsx.hbs',
      },
      {
        type: 'add',
        path: 'src/stories/challenge{{index}}/{{pascalCase name}}.stories.tsx',
        templateFile: 'plop-templates/component/Component.stories.tsx.hbs',
      },
    ],
  });
};
