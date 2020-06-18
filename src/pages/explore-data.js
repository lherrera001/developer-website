import { PageContext } from '../components/PageContext';
import { BreadcrumbContext } from '../components/BreadcrumbContext';
import createBreadcrumbs from '../utils/create-breadcrumbs';
import GuideListing from '../components/GuideListing/GuideListing';
import GuideTile from '../components/GuideTile';
import PageTitle from '../components/PageTitle';
import Layout from '../components/Layout';
import React from 'react';
import SEO from '../components/Seo';
import { pageContext } from '../types';
import pages from '../data/sidenav.json';

const title = 'Get data into New Relic';

const guides = [
  {
    minutes: 5,
    title: 'Full Stack Monitoring',
    description: 'Get data into New Relic using your existing instrumentation.',
    path: '',
  },
  {
    minutes: 10,
    title: 'Customized Agents',
    description:
      'Extend the New Relic agents you already have with custom events and attributes.',
    path: '',
  },
  {
    minutes: 30,
    title: 'Open Telemetry',
    description:
      'Learn to use the open standard for data collection with New Relic.',
    path: 'guides/rest-api',
  },
];

const ExploreDataPage = ({ pageContext }) => {
  const crumbs = createBreadcrumbs('/explore-data', pages);
  return (
    <PageContext.Provider value={pageContext}>
      <BreadcrumbContext.Provider value={crumbs}>
        <Layout>
          <SEO title={title} />
          <PageTitle>{title}</PageTitle>
          <p className="intro-text">
            Instrument your applications and infrastructure to start collecting
            monitoring data
          </p>
          <GuideListing>
            <GuideListing.List>
              {guides.map((guide, index) => (
                <GuideTile key={index} {...guide} />
              ))}
            </GuideListing.List>
          </GuideListing>
        </Layout>
      </BreadcrumbContext.Provider>
    </PageContext.Provider>
  );
};

ExploreDataPage.propTypes = {
  pageContext,
};

export default ExploreDataPage;
