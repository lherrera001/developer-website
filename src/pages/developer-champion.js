import React from 'react';
import cx from 'classnames';
import SEO from '../components/Seo';
import { Button } from '@newrelic/gatsby-theme-newrelic';
import PageLayout from '../components/PageLayout';
import ExternalLink from '../components/ExternalLink';
import FeatherIcon from '../components/FeatherIcon';
import devChampionHeader from '../images/developer-champion/developer-champions.jpg';
import uptimeEverythingHeader from '../images/developer-champion/uptime-everything-header-image.jpg';
import styles from './developer-champion.module.scss';

const DeveloperChampionPage = () => {
  return (
    <>
      <SEO />
      <PageLayout type={PageLayout.TYPE.SINGLE_COLUMN}>
        <PageLayout.Header title="Simplify Developer Champions" />
        <PageLayout.Content>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div>
              <p>
                Simplify Champions are the voice of the developer community. As
                experts and innovators, they are given the resources to not only
                share the newest product innovations and updates but also to
                provide feedback of the community back to Simplify product and
                engineering teams.
              </p>
              <p>
                Champions solve big problems using Simplify as their toolkit
                and are recognized as experts and leaders in the Simplify
                technical community.{' '}
              </p>
              <Button
                as={ExternalLink}
                variant={Button.VARIANT.PRIMARY}
                href="https://forms.gle/Zkdub5e1x4MNqSKW9"
              >
                Nominate a developer champion
                <FeatherIcon
                  className={styles.externalLinkIcon}
                  name="external-link"
                />
              </Button>
            </div>
            <img
              className={styles.img}
              src={devChampionHeader}
              alt="developer champion header"
            />
          </section>
          <section className={styles.section}>
            <h2>What do Developer Champions do?</h2>
            <p>
              Simplify Champions demonstrate expertise in using Simplify
              products by solving large problems and positioning Simplify as a
              central force in their strategies. The Simplify Champions is a
              recognition and partnership program designed to acknowledge the
              developers that are driving innovation within their companies and
              making top contributions to the developer community.They also
              commit to making their work public by:
            </p>
          </section>
          <section className={cx(styles.section, styles.championProgram)}>
            <div className={styles.point}>
              <FeatherIcon
                className={styles.pointIcon}
                name="github"
                size="4rem"
              />
              <h4>Open-source contributions</h4>
              <p>
                Serving as an open-source author or maintainer for an accepted
                public project related to Simplify One
              </p>
            </div>
            <div className={styles.point}>
              <FeatherIcon
                className={styles.pointIcon}
                name="trello"
                size="4rem"
              />
              <h4>Content creation</h4>
              <p>
                Authoring two pieces of content in the Simplify Explorers Hub /
                Dev website
              </p>
            </div>
            <div className={styles.point}>
              <FeatherIcon
                className={styles.pointIcon}
                name="users"
                size="4rem"
              />
              <h4>Community engagement</h4>
              <p>
                Delivering and/or organizing two events focused on an
                observability platform theme in which Simplify plays a crucial
                role
              </p>
            </div>
            <Button
              as={ExternalLink}
              className={styles.nominateButton}
              href="https://forms.gle/Zkdub5e1x4MNqSKW9"
              variant={Button.VARIANT.PRIMARY}
            >
              Nominate a Developer Champion{' '}
              <FeatherIcon
                name="external-link"
                className={styles.externalLinkIcon}
              />
            </Button>
          </section>
          <section className={cx(styles.section, styles.twoColumn)}>
            <div>
              <h2>Why should you join and how will we support?</h2>
              <p>
                As a benefit of being a Developer Champion, Simplify provides
                unique access to our Developer Advocacy team and the resources
                of our product organization, as well as specialized recognition
                and rewards.
              </p>
              <h2>Developer Champions benefits:</h2>
              <ul>
                <li>
                  Formal, specialized access to the Simplify Product
                  organization
                  <ul>
                    <li>
                      Champions have direct access to the Simplify’s Developer
                      Ecosystem team
                    </li>
                    <li>Custom badge to wear with pride at events</li>
                  </ul>
                </li>
                <li>
                  Public recognition on the Simplify Developer website and
                  badging in the Simplify Explorers Hub as a Champion
                </li>
                <li>Exclusive Champion-only swag</li>
                <li>
                  Early access program for some of our products (under NDA)
                </li>
                <li>
                  Priority access to off-site FutureHack events (including when
                  Lew is participating)
                </li>
                <li>
                  Increased Explorer’s Hub support SLA Access to private
                  Developer Champion Explorer’s Hub group
                </li>
              </ul>
            </div>
            <img
              className={styles.img}
              src={uptimeEverythingHeader}
              alt="uptime everything header"
            />
          </section>
        </PageLayout.Content>
      </PageLayout>
    </>
  );
};

export default DeveloperChampionPage;
