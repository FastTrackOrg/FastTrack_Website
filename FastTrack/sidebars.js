/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */


module.exports = {
  tutorialSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: ["intro", "installation", "example", "tutorial"],
    },
    {
      type: 'category',
      label: 'Tracking Analysis',
      items: ["dataPreparation", "timeline","interactiveTracking", "trackingInspector", "batchTracking", "trackingCli"],
    },
    {
      type: 'category',
      label: 'Result',
      items: ["dataOutput"],
    },
    {
      type: 'category',
      label: 'Tips',
      items: ["trackingParameters", "detection", "workflow", "setParam"],
    },
    {
      type: 'category',
      label: 'Literature',
      items: ["reference"],
    },
    {
      type: 'category',
      label: 'Help',
      items: ["report", "help"],
    },
  ],
};
