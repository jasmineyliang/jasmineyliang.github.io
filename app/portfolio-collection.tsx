import original from './data/original-portfolio.json';

export function CollectionContent({ index, collClass }: { index: number; collClass?: string }) {
  const section = original.sections[index];
  return (
    <>
      <div className="archive-body" dangerouslySetInnerHTML={{ __html: section.intro }} />
      <div className={`collection-grid ${collClass ?? ''}`}>
        {section.groups.map((group, i) => (
          <article className="collection-group" key={`${group.title}-${i}`}>
            <h3>{group.title}</h3>
            <div className="archive-body" dangerouslySetInnerHTML={{ __html: group.html }} />
          </article>
        ))}
      </div>
    </>
  );
}

export function OriginalCollection({ index, id, label }: { index: number; id: string; label: string }) {
  const section = original.sections[index];
  return (
    <section className={`collection section wrap collection-${index}`} id={id} aria-labelledby={`${id}-title`}>
      <div className="section-heading">
        <div className="eyebrow">{label}</div>
        <h2 id={`${id}-title`}>{section.title}</h2>
      </div>
      <CollectionContent index={index} collClass={`coll-${index}`} />
    </section>
  );
}

export function OriginalProfile() {
  return (
    <details className="original-profile">
      <summary>Earlier research profile · Notre Dame</summary>
      <div className="archive-body" dangerouslySetInnerHTML={{ __html: original.profile }} />
    </details>
  );
}
