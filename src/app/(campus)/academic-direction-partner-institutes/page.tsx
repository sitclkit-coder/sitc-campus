import Image from 'next/image';
import {
  PageIntro,
  PageStructuredData,
  PageCallToAction,
} from '@/components/inner-page';
import { ButtonLink } from '@/components/ui/button-link';
import { academicPartners } from '@/content/partners';
import { mainPageSeo } from '@/lib/page-seo';

export const metadata = mainPageSeo('partners');

export default function PartnersPage() {
  return (
    <>
      <PageStructuredData pageKey="partners" type="CollectionPage" />
      <div className="page-container">
        <PageIntro
          title="Academic partners"
          breadcrumb="Academic partners"
          accent="A connected academic community."
          description="Meet the academic direction and digital learning partners working with SITC Campus."
        />
        <section
          className="partner-directory"
          aria-label="Academic partner directory"
        >
          {academicPartners.map((partner) => (
            <article className="partner-row" key={partner.name}>
              <div
                className={`partner-logo${'wideLogo' in partner ? ' wide-logo' : ''}${'logoClassName' in partner ? ` ${partner.logoClassName}` : ''}`}
              >
                <Image
                  src={partner.image}
                  alt={`${partner.name} logo`}
                  fill
                  sizes={
                    'logoClassName' in partner
                      ? '(max-width: 760px) 121px, (max-width: 1000px) 140px, 180px'
                      : '(max-width: 640px) 110px, 180px'
                  }
                />
              </div>
              <div className="partner-name">
                <h2>{partner.name}</h2>
                <p>{partner.role}</p>
                {'url' in partner && (
                  <ButtonLink
                    small
                    className="partner-visit"
                    href={partner.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit the ${partner.name} website`}
                  >
                    Visit website ↗
                  </ButtonLink>
                )}
              </div>
              <p className="partner-description">{partner.description}</p>
            </article>
          ))}
        </section>
        <p className="directory-note">
          Ask admissions for the awarding arrangements, recognition and entry
          requirements of your chosen programme.
        </p>
      </div>
      <PageCallToAction title="Find the right learning pathway." />
    </>
  );
}
