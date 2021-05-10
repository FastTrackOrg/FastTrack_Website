import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Enabled easy and free video tracking for anyone',
    Svg: require('../../static/img/fasttrack.svg').default,
    description: (
      <>
      FastTrack project was first started to study the chemical perception of zebrafish. It evolved to support a wide range of systems, from micro-organisms to pedestrians. The current version integrates an intuitive user interface that enabled the user to automatically track objects -independent of their total or instantaneous number- and to examine and correct the tracking.
      </>
    ),
  },
  {
    title: 'Our Mission',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
      Our mission is to provide a free alternative to commercial tracking software that can be used by non-technical people regardless of programming abilities, that do not necessitate expensive equipment.
      </>
    ),
  },
  {
    title: 'Contact Info',
    Svg: require('../../static/img/contact.svg').default,
    description: (
      <>
      Looking to get in contact with FastTrack dev team. You can get in touch on by email at benjamin.gallois@fasttrack.sh.
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
