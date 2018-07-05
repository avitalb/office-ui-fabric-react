import * as React from 'react';
import { LabelBasicExample } from './examples/Label.Basic.Example';
import { Button } from '../..';

const jsContent = require('!raw-loader!office-ui-fabric-react/src/components/Label/codepen_examples/Label.Basic.CodepenExample.txt') as string;
const htmlContent = `<script src="//unpkg.com/office-ui-fabric-react/dist/office-ui-fabric-react.min.js"></script>
<div id=\'content\'></div>`;

const headContent = `<script type="text/javascript" src="https://unpkg.com/react@16/umd/react.development.js"></script><script type="text/javascript" src="https://unpkg.com/react-dom@16/umd/react-dom.development.js"></script>`;

const valueData = {
  title: 'New Fabric Pen!',
  html: htmlContent,
  head: headContent,
  js: jsContent,
  js_pre_processor: 'typescript'
};

// reformat the JSON string to take out the quotes so it'll work with the Codepen API
const JSONstring = JSON.stringify(valueData)
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&apos;');

export const LabelView = () => (
  <div>
    <LabelBasicExample />
    <form action="https://codepen.io/pen/define" method="POST" target="_blank">
      <input type="hidden" name="data" value={JSONstring} />
      <Button type="submit" text="Codepen example" />
    </form>
  </div>
);
