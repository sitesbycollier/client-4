const PageHero = () => (
  <section
    className="relative py-32 flex items-center"
    style={{
      backgroundImage:
        "url(https://c.animaapp.com/mq88tjouY4jneQ/img/generated-image-1781121490504.png)",
      backgroundSize: "cover",
      backgroundPosition: "center top",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <p className="text-white/80 tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-3 drop-shadow">
        Who We Are
      </p>
      <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
        About the Club
      </h1>
      <p className="text-white/80 text-lg leading-relaxed max-w-2xl font-source_sans_pro drop-shadow">
        A 75-year legacy of supporting music education and appreciating the arts
        in Hot Springs, Arkansas.
      </p>
    </div>
  </section>
);

const History = () => (
  <section className="bg-cream py-20">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          Our Story
        </p>
        <h2 className="font-playfair text-4xl text-navy">
          75 Years of Musical Heritage
        </h2>
        <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
      </div>
      <div className="space-y-6 text-navy/65 leading-relaxed">
        <p className="text-lg">
          The Hot Springs Music Club was founded on{" "}
          <strong className="text-navy">February 8, 1951</strong>, by community
          members who believed deeply in the power of music to enrich lives and
          strengthen community bonds.
        </p>
        <p>
          For more than seven decades, the club has served as a cornerstone of
          musical life in Hot Springs, Arkansas — nurturing young talent,
          sponsoring scholarship auditions, hosting performances, and fostering
          greater appreciation of music in all its forms throughout Garland
          County.
        </p>
        <p>
          The organization is not a performing ensemble — it is a music
          education organization, a scholarship organization, a community arts
          advocate, and a music appreciation society. At its heart, the club
          exists to support local students and bring music to the Hot Springs
          community.
        </p>
      </div>
    </div>
  </section>
);

const Timeline = () => (
  <section className="bg-navy py-20">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-14">
        <h2 className="font-playfair text-4xl text-cream mb-3">
          A Legacy of Service
        </h2>
        <div className="w-14 h-0.5 bg-gold mx-auto" />
      </div>
      <div className="space-y-10">
        {[
          {
            year: "1951",
            event:
              "Hot Springs Music Club founded on February 8, 1951 in Hot Springs, Arkansas — dedicated to supporting music education and appreciation.",
          },
          {
            year: "1950s–70s",
            event:
              "The club establishes itself as a community institution, hosting recitals, member programs, and music appreciation events across Garland County.",
          },
          {
            year: "1980s–90s",
            event:
              "Scholarship program formalized. Annual competitive auditions become the centerpiece of the club&#39;s mission to support aspiring young musicians.",
          },
          {
            year: "2022",
            event:
              "Three scholarship recipients honored — Carlee McCrary, Catie Canu, and Jacob Happy — each awarded funding for their music studies.",
          },
          {
            year: "2025",
            event:
              "The club continues its 75-year legacy, holding annual scholarship auditions at First United Methodist Church on Central Avenue.",
          },
        ].map(({ year, event }) => (
          <div key={year} className="flex gap-8 items-start">
            <div className="w-28 shrink-0 text-right">
              <span className="font-playfair text-gold text-lg">{year}</span>
            </div>
            <div className="w-px bg-gold/30 self-stretch mt-2 shrink-0" />
            <p
              className="text-cream/65 leading-relaxed pt-1 text-sm"
              dangerouslySetInnerHTML={{ __html: event }}
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

const MissionThemes = () => (
  <section className="bg-cream-dark py-20">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          What We Believe
        </p>
        <h2 className="font-playfair text-4xl text-navy mb-8">Our Mission</h2>
        <blockquote className="font-playfair text-xl text-navy italic leading-relaxed border-l-4 border-gold pl-8 text-left max-w-3xl mx-auto">
          The Hot Springs Music Club supports and inspires the next generation
          of musicians through scholarships, performance opportunities, music
          education, and community engagement. Since 1951, the organization has
          worked to foster a lifelong appreciation of music while encouraging
          artistic excellence throughout the Hot Springs community.
        </blockquote>
      </div>
      <div className="grid md:grid-cols-3 gap-8 mt-14">
        {[
          {
            theme: "Music Education",
            desc: "Supporting young musicians through scholarships and opportunities.",
          },
          {
            theme: "Community",
            desc: "Bringing music appreciation to all residents of Hot Springs.",
          },
          {
            theme: "Excellence",
            desc: "Encouraging high standards in musical achievement.",
          },
          {
            theme: "Heritage",
            desc: "Serving the community since 1951 with pride in our history.",
          },
          {
            theme: "Accessibility",
            desc: "Making music appreciation available to everyone.",
          },
          {
            theme: "Mentorship",
            desc: "Connecting students with the guidance they need to succeed.",
          },
        ].map(({ theme, desc }) => (
          <div key={theme} className="border-l-2 border-gold pl-5">
            <h4 className="font-playfair text-lg text-navy mb-1">{theme}</h4>
            <p className="text-navy/60 text-sm leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const PresidentBio = () => (
  <section className="bg-cream py-20">
    <div className="max-w-5xl mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          Club President
        </p>
        <h2 className="font-playfair text-4xl text-navy">Dr. Tom Bolton</h2>
        <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
      </div>
      <div className="md:flex gap-12 items-start">
        <div className="md:w-64 shrink-0 mb-8 md:mb-0">
          <div className="bg-cream-dark border-t-4 border-burgundy p-6 text-center">
            <div className="w-24 h-24 rounded-full bg-navy/10 flex items-center justify-center mx-auto mb-4">
              <span className="font-playfair text-4xl text-navy/40">T</span>
            </div>
            <h3 className="font-playfair text-xl text-navy mb-1">
              Dr. Tom Bolton
            </h3>
            <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro font-semibold mb-3">
              President
            </p>
            <p className="text-navy/50 text-xs font-source_sans_pro leading-relaxed">
              President since 2021
            </p>
            <div className="mt-4 pt-4 border-t border-navy/10 space-y-1 text-left">
              <p className="text-navy/50 text-xs font-source_sans_pro">
                B.M. — Ouachita Baptist University
              </p>
              <p className="text-navy/50 text-xs font-source_sans_pro">
                M.M., Ph.D. — University of North Texas
              </p>
            </div>
          </div>
        </div>
        <div className="flex-1 space-y-4 text-navy/65 leading-relaxed text-sm font-source_sans_pro">
          <p>
            A native of Little Rock, Arkansas, Dr. Bolton earned a Bachelor of
            Music degree in vocal performance from Ouachita Baptist University
            and a Master of Music and Doctor of Philosophy in musicology from
            the University of North Texas.
          </p>
          <p>
            His long professional career includes college and seminary teaching,
            church ministry, and professional solo performances in operatic
            roles and guest appearances with symphony orchestras.
          </p>
          <p>
            He was professor of music at Ouachita Baptist University in
            Arkadelphia, Arkansas from 1973 to 1989. While teaching at Ouachita
            his Chamber Singers were selected by audition to represent the state
            of Arkansas at the Bicentennial in 1976. In 1979 they were one of
            eight US choirs selected to tour Europe and sing with a Bach
            Festival Chorus accompanied by the renowned English Chamber
            Orchestra. In 1988 he spent several months abroad in Italy while on
            sabbatical, studying at, and performing with the{" "}
            <span className="italic">
              Sessione Senese per la Musica e l&#39;Arte
            </span>
            .
          </p>
          <p>
            From 1989 to 1996 he served as fulltime minister of music at Little
            Rock&#39;s First Baptist Church, directing eight performances of{" "}
            <span className="italic">The Living Christmas Tree</span> each year.
          </p>
          <p>
            In 1996 his educational and ministerial roles were combined when he
            accepted the position of Professor of Church Music at The Southern
            Baptist Theological Seminary in Louisville, Kentucky. In 2000 he was
            named Dean of the School of Church Music and Worship, retiring in
            2012 and moving to Hot Springs, Arkansas to be near family.
          </p>
          <p>
            In retirement he has taught voice as well as music and worship
            classes at Ouachita Baptist University and Champion Christian
            College. He has served as Minister of Music at Lake Hamilton Baptist
            Church since 2015 and has been the musical director of The Village
            Chorale in Hot Springs Village since 2018. He has been president of
            the Hot Springs Music Club since 2021.
          </p>
          <p>
            His career as choral director began in 1969 and continues today. He
            has directed choirs of all ages — children&#39;s choirs, youth
            choirs, adult church choirs, university choirs, seminary choirs, and
            now an auditioned community choir. Having been a voice teacher for
            half a century, his approach to choral directing stresses correct,
            unified vocal production combined with careful attention to musical
            nuances, resulting in a choral art that communicates not only to the
            ears of an audience, but to their collective hearts and minds.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Leadership = () => {
  const officers = [
    { name: "Dr. Tom Bolton", role: "President" },
    { name: "Dianna Thayer", role: "Secretary" },
    { name: "Judy Pugh", role: "Treasurer" },
    { name: "Kathy Mesko", role: "Junior Festival Chair" },
    {
      name: "Sheree O&#39;Rorke",
      role: "Scholarship Chair",
      email: "2kidos@gmail.com",
    },
    { name: "Jolene Williams", role: "Honors Recital Chair" },
    { name: "Kay Provus", role: "Yearbook Chair" },
  ];
  const additional = ["Kathie White", "Mary Tom Taylor", "Jerry Jones"];
  return (
    <section className="bg-cream-dark py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
            2025–2026 Officers
          </p>
          <h2 className="font-playfair text-4xl text-navy">Leadership Team</h2>
          <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5 mb-10">
          {officers.map(({ name, role, email }) => (
            <div key={role} className="bg-cream p-6 border-l-4 border-burgundy">
              <h3
                className="font-playfair text-lg text-navy mb-0.5"
                dangerouslySetInnerHTML={{ __html: name }}
              />
              <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro font-semibold mb-2">
                {role}
              </p>
              {email && (
                <a
                  href={`mailto:${email}`}
                  className="text-burgundy/70 text-xs hover:underline font-source_sans_pro"
                >
                  {email}
                </a>
              )}
            </div>
          ))}
        </div>
        <div className="border-t border-navy/10 pt-8">
          <p className="text-navy/50 text-xs tracking-widest uppercase font-source_sans_pro mb-4 text-center">
            Additional Leadership Team Members
          </p>
          <div className="flex flex-wrap justify-center gap-6">
            {additional.map((name) => (
              <span key={name} className="font-playfair text-navy/70 text-base">
                {name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export const About = () => (
  <div>
    <PageHero />
    <History />
    <Timeline />
    <MissionThemes />
    <PresidentBio />
    <Leadership />
  </div>
);
