import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';

// Background image: https://unsplash.com/photos/XpMhAkOWPOY

const FeatureList = [
    {
        title: 'Build with Olric',
        Svg: require('@site/static/img/embeddable.svg').default,
        description: (
            <>
                Embed Olric into your applications to remove external data stores from
                your architecture.
            </>
        ),
    },
    {
        title: 'Blazingly Fast',
        Svg: require('@site/static/img/inmemory.svg').default,
        description: (
            <>
                Stores all data in RAM and thanks to its carefully crafted storage engine,
                Olric guarantees the best performance.
            </>
        ),
    },
    {
        title: 'Sharded by default',
        Svg: require('@site/static/img/distributed.svg').default,
        description: (
            <>
                Scale out your application under load without any extra configuration or plugin.
            </>
        ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="landing-page-feature text--center">
        <Svg className={styles.featureSvg} role="img" />
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
