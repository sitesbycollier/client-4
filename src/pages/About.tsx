import { usePageMeta } from "@/hooks/usePageMeta";

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
        About Us
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
          Originally founded as The Hot Springs Music Club on{" "}
          <strong className="text-navy">February 8, 1951</strong>, the club
          changed its name to The Hot Springs Music Connection in 2025 to better
          reflect its mission.
        </p>
        <p>
          For more than seven decades, the organization has served as a
          cornerstone of musical life in Hot Springs, Arkansas — nurturing young
          talent, sponsoring scholarship auditions, hosting performances, and
          fostering greater appreciation of music in all its forms throughout
          Garland County.
        </p>
        <p>
          We exist to celebrate and showcase a wide array of artistic music
          styles both within and outside our organization while nurturing the
          education of young musicians and the traditions of American music.
          Everyone — whether a professional, amateur, educator, or arts
          enthusiast — has a place here among kindred spirits in our Hot Springs
          Music Connection.
        </p>
      </div>
    </div>
  </section>
);

const NameChange = () => (
  <section className="bg-white py-20">
    <div className="max-w-4xl mx-auto px-4">
      <div className="text-center mb-14">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
          2025
        </p>
        <h2 className="font-playfair text-4xl text-navy mb-3">
          A New Name — A New Vision
        </h2>
        <p className="font-playfair text-lg text-navy/50 italic">
          A Message from President Dr. Tom Bolton
        </p>
        <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
      </div>

      <div className="space-y-6 text-navy/65 leading-relaxed font-source_sans_pro">
        <p className="text-lg font-playfair italic text-navy/80">
          After 75 remarkable years of musical fellowship and service, the Hot
          Springs Music Club has reached a defining moment — a time to embrace a
          new identity that better reflects who we are, what we do, and where
          we&#39;re going. We are proud to introduce our refreshed name: Hot
          Springs Music Connection.
        </p>

        <h3 className="font-playfair text-2xl text-navy pt-2">
          Why the Change?
        </h3>
        <p>
          We wanted to update and &#34;refresh&#34; our self-image and the
          public&#39;s perception of who we are. As we reflected on the somewhat
          archaic word <em>club</em>, we were afraid it may conjure up the image
          of a somewhat cliquish circle of friends who get together to take part
          in a common interest — like discussing a book or perhaps knitting. The
          word may also evoke a feeling of exclusivity, such as a country club,
          where entry requirements or membership processes can contribute to
          social stratification. This spirit of exclusivity can create barriers
          rather than connection.
        </p>
        <p>
          This is not, nor has it been, our intention. So why not use a word
          that does not carry these negative connotations? Hence, the word{" "}
          <em>connection</em>.
        </p>

        <blockquote className="border-l-4 border-gold pl-6 py-1 font-playfair text-xl text-navy/80 italic my-6">
          This name change isn&#39;t just semantic; it&#39;s symbolic.
        </blockquote>

        <p>We want our organization to seek to:</p>
        <ol className="list-decimal list-inside space-y-2 pl-2">
          <li>
            Foster dynamic relationships between lovers of the arts with varied
            backgrounds
          </li>
          <li>Celebrate a wide range of artistic styles</li>
          <li>
            Unite with other organizations in our community through shared
            artistic experiences and meaningful causes
          </li>
        </ol>

        <h3 className="font-playfair text-2xl text-navy pt-4">
          A Cultural Liaison
        </h3>
        <p>
          With that in mind, it is our intention to keep you, our members, more
          informed of activities in various arts and educational organizations
          in our community through what Dr. Bolton calls a &#34;cultural
          liaison.&#34; His own interest in regional art activities has been
          heightened by his appointment by the Hot Springs City Council to the
          Arts Advisory Committee for the city of Hot Springs.
        </p>

        <h3 className="font-playfair text-2xl text-navy pt-4">
          Our Vision Is Expanding — Not Changing
        </h3>
        <p>
          We believe that everyone — whether you&#39;re a professional, amateur,
          educator, or arts enthusiast — should have a place here among kindred
          spirits in our Hot Springs Music Connection.
        </p>
        <p>
          Unchanged is one of the most impactful roles of this organization:
          championing young musicians. We do this in two ways:
        </p>
        <ul className="list-disc list-inside space-y-2 pl-2">
          <li>
            Each <strong className="text-navy">February</strong>, we hold our{" "}
            <strong className="text-navy">Junior Music Festival</strong>, in
            which young musicians perform for professional musicians to be
            adjudicated and encouraged with certificates and trophy cups.
          </li>
          <li>
            Each year we raise funds to award{" "}
            <strong className="text-navy">scholarships</strong> to auditioned
            Garland County students pursuing music-related degrees in higher
            education.
          </li>
        </ul>
        <p>
          Through this organization, we are given the opportunity to directly
          support the next generation of artists, educators, and cultural
          leaders.
        </p>

        <div className="bg-cream border-l-4 border-burgundy pl-6 py-5 my-6">
          <p className="font-playfair text-lg text-navy italic leading-relaxed">
            &#34;To summarize the mission of Hot Springs Music Connection — we
            exist to celebrate and showcase a wide array of artistic music
            styles both within and outside our organization while nurturing the
            education of young musicians and the traditions of American
            music.&#34;
          </p>
        </div>

        <p>
          The Hot Springs Music Connection was founded in February of 1951, and
          we are proudly affiliated with both the Arkansas Federation of Music
          Clubs and the National Federation of Music Clubs, which traces its
          roots back to 1898.
        </p>

        <p className="font-playfair text-lg italic text-navy/80 pt-2">
          With this name change, may our love of music and the arts find new
          meaning through community, creativity, and connection. In our 75th
          year, our story is not ending; it is beginning again — stronger than
          ever with an expanded vision.
        </p>
        <p className="text-right font-playfair text-navy/60 italic text-sm">
          — Dr. Tom Bolton, President
        </p>
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
          Hot Springs Music Connection exists to celebrate and showcase a wide
          array of artistic music styles both within and outside our
          organization while nurturing the education of young musicians and the
          traditions of American music. Everyone — whether a professional,
          amateur, educator, or arts enthusiast — has a place here among kindred
          spirits.
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
            theme: "Connection",
            desc: "Fostering dynamic relationships between lovers of the arts with varied backgrounds.",
          },
          {
            theme: "Heritage",
            desc: "Serving the community since 1951 with pride in our history.",
          },
          {
            theme: "Accessibility",
            desc: "Making music appreciation available to everyone — professionals, amateurs, educators, and enthusiasts alike.",
          },
          {
            theme: "Mentorship",
            desc: "Championing the next generation of artists, educators, and cultural leaders.",
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
          Our President
        </p>
        <h2 className="font-playfair text-4xl text-navy">Dr. Tom Bolton</h2>
        <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
      </div>
      <div className="md:flex gap-12 items-start">
        <div className="md:w-64 shrink-0 mb-8 md:mb-0">
          <div className="bg-cream-dark border-t-4 border-burgundy p-6 text-center">
            <img
              src="/assets/images/Tom.png"
              alt="Dr. Tom Bolton"
              className="h-28 w-28 object-cover mx-auto mb-5 bg-navy/10"
            />
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
            Hot Springs Music Connection since 2021, and was appointed by the
            Hot Springs City Council to the Arts Advisory Committee for the city
            of Hot Springs.
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
    {
      name: "Peggy Stratton",
      role: "Junior Festival Chair and Scholarship Auditions Chair",
    },
    { name: "Jolene Williams", role: "Honors Recital Chair" },
    { name: "David Thayer", role: "Yearbook Chair" },
    { name: "Sheree O&#39;Rorke", role: "American Music Chair" },
    { name: "Kathie White", role: "Leadership Team Member" },
    { name: "Mary Tom Taylor", role: "Leadership Team Member" },
    { name: "Jerry Jones", role: "Leadership Team Member" },
  ];
  return (
    <section className="bg-cream-dark py-20">
      <div className="max-w-5xl mx-auto px-4">
        <div className="text-center mb-12">
          <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
            2026–2027 Officers
          </p>
          <h2 className="font-playfair text-4xl text-navy">Leadership Team</h2>
          <div className="w-14 h-0.5 bg-gold mx-auto mt-4" />
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
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
      </div>
    </section>
  );
};

export const About = () => {
  usePageMeta({
    title: "About Us",
    description:
      "Learn about Hot Springs Music Connection — 75 years of musical heritage, our president Dr. Tom Bolton, leadership team, and our 2025 name change from Hot Springs Music Club.",
  });
  return (
    <div>
      <PageHero />
      <History />
      <NameChange />
      <MissionThemes />
      <PresidentBio />
      <Leadership />
    </div>
  );
};
