import { Music, FileText, Archive, Download } from "lucide-react";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";

const PIANO_TEACHERS = [
  {
    name: "Kristen Bomberger",
    email: "kbbomberger@gmail.com",
    phones: ["(501) 463-1475"],
  },
  {
    name: "Lowella Cherry",
    email: "rcherry@cablelynx.com",
    phones: ["(501) 620-4836", "(501) 282-1731"],
  },
  {
    name: "Diana Glover",
    email: "dianglover@yahoo.com",
    phones: ["(501) 622-0820"],
  },
  {
    name: "Karen Granderson",
    email: "karen.granderson@gmail.com",
    phones: ["(817) 689-3979"],
  },
  {
    name: "Kristen Marie LaMadrid",
    email: "krisxmarie@yahoo.com",
    phones: ["(501) 463-0948"],
  },
  {
    name: "Sigilda Naidin",
    email: "sigilda@yahoo.com",
    phones: ["(501) 627-6273"],
  },
  {
    name: "Pat Smith",
    email: "mspat1968@yahoo.com",
    phones: ["(501) 767-9752", "(501) 282-7330"],
  },
  {
    name: "Jolene C. Williams",
    email: "triplej97@yahoo.com",
    phones: ["(501) 760-2698", "(501) 545-6374"],
  },
];

const INSTRUMENTAL_TEACHERS = [
  {
    instrument: "Violin",
    name: "Kristen Bomberger",
    email: "kbbomberger@gmail.com",
    phones: ["(501) 463-1475"],
  },
];

const PROGRAM_SECTIONS = [
  {
    icon: Archive,
    title: "Historic Concert Programs",
    description:
      "A growing archive of concert and event programs from past Hot Springs Music Connection seasons.",
  },
  {
    icon: Music,
    title: "Guest Artist Programs",
    description:
      "Programs from special guest performances and federation-related events held through the years.",
  },
  {
    icon: FileText,
    title: "Student & Scholarship Events",
    description:
      "Programs connected to student performances, scholarship showcases, and related club activities.",
  },
];

const PROGRAM_DOWNLOADS = [
  {
  title: "A New Name, A New Vision",
  filename: "Program 25-09-07.pdf",
  href: "assets/docs/Program 25-09-07.pdf",
  },
  {
  title: "October Interludes: A Chamber Music Celebration",
  filename: "Program 25-10-05.pdf",
  href: "assets/docs/Program 25-10-05.pdf",
  },
  {
  title: "Her Sound, Her Story: Music by American Women",
  filename: "Program 25-11-09.pdf",
  href: "assets/docs/Program 25-11-09.pdf",
  },
  {
  title: "Founders Day Jubilee: 75 Years of Music and Meaning",
  filename: "Program 26-01-11.pdf",
  href: "assets/docs/Program 26-01-11.pdf",
  },
  {
  title: "Sanctuary of Sound: Music for the Church",
  filename: "Program 26-03-15.pdf",
  href: "assets/docs/Program 26-03-15.pdf",
  },
  {
  title: "Sound in Motion: Dance to the Music",
  filename: "Program 26-04-12.pdf",
  href: "assets/docs/Program 26-04-12.pdf",
  },
  {
  title: "Spotlight on Excellence: Recital of Honor Students",
  filename: "Program 26-05-03.pdf",
  href: "assets/docs/Program 26-05-03.pdf",
  },
];

interface Teacher {
  name: string;
  email: string;
  phones: string[];
  instrument?: string;
}

const TeacherCard = ({ teacher }: { teacher: Teacher }) => (
  <div className="bg-cream border-l-4 border-burgundy p-6">
    {teacher.instrument && (
      <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro font-semibold mb-1">
        {teacher.instrument} Teacher
      </p>
    )}
    <h3 className="font-playfair text-xl text-navy mb-2">{teacher.name}</h3>
    <div className="space-y-1">
      <a
        href={`mailto:${teacher.email}`}
        className="block text-burgundy/80 text-sm hover:underline font-source_sans_pro"
      >
        {teacher.email}
      </a>
      {teacher.phones.map((p) => (
        <a
          key={p}
          href={`tel:${p.replace(/\D/g, "")}`}
          className="block text-navy/60 text-sm hover:text-navy font-source_sans_pro transition-colors"
        >
          {p}
        </a>
      ))}
    </div>
  </div>
);

const PageHero = () => (
  <section
    className="relative py-32 flex items-center"
    style={{
      backgroundImage:
        "url(https://images.unsplash.com/photo-1507838153414-b4b713384a76?w=1600&auto=format&fit=crop&q=80)",
      backgroundSize: "cover",
      backgroundPosition: "center",
    }}
  >
    <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-transparent" />
    <div className="relative z-10 max-w-4xl mx-auto px-4">
      <p className="text-white/80 tracking-[0.25em] uppercase text-xs font-source_sans_pro mb-3 drop-shadow">
        Hot Springs Music Club
      </p>
      <h1 className="font-playfair text-5xl md:text-6xl text-white mb-4 drop-shadow-lg">
        Music Education
      </h1>
      <p className="text-white/80 text-lg leading-relaxed max-w-2xl font-source_sans_pro drop-shadow">
        Connect with qualified local teachers for piano and instrumental
        instruction in the Hot Springs area.
      </p>
    </div>
  </section>
);

const Intro = () => (
  <section className="bg-cream py-16">
    <div className="max-w-4xl mx-auto px-4 text-center">
      <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-3">
        Find a Teacher
      </p>
      <h2 className="font-playfair text-4xl text-navy mb-4">
        Local Music Instructors
      </h2>
      <div className="w-14 h-0.5 bg-gold mx-auto mb-8" />
      <p className="text-navy/65 leading-relaxed max-w-2xl mx-auto font-source_sans_pro">
        The Hot Springs Music Club is proud to connect aspiring musicians with
        experienced local teachers. Whether you&#39;re beginning your musical
        journey or preparing for competitive auditions, these instructors can
        help you reach your goals.
      </p>
    </div>
  </section>
);

const PianoTeachers = () => (
  <section className="bg-cream-dark py-16">
    <div className="max-w-5xl mx-auto px-4">
      <div className="mb-10">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-2">
          Keyboard
        </p>
        <h2 className="font-playfair text-3xl text-navy">Piano Teachers</h2>
        <div className="w-10 h-0.5 bg-gold mt-3" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {PIANO_TEACHERS.map((t) => (
          <TeacherCard key={t.name + t.email} teacher={t} />
        ))}
      </div>
    </div>
  </section>
);

const InstrumentalTeachers = () => (
  <section className="bg-cream py-16">
    <div className="max-w-5xl mx-auto px-4">
      <div className="mb-10">
        <p className="text-burgundy text-xs tracking-widest uppercase font-source_sans_pro mb-2">
          Strings &amp; More
        </p>
        <h2 className="font-playfair text-3xl text-navy">
          Instrumental Teachers
        </h2>
        <div className="w-10 h-0.5 bg-gold mt-3" />
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-5">
        {INSTRUMENTAL_TEACHERS.map((t) => (
          <TeacherCard key={t.name + t.email} teacher={t} />
        ))}
      </div>
    </div>
  </section>
);

const ProgramsArchive = () => (
  <section className="bg-cream-dark py-20">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-12">
        <p className="text-burgundy/70 text-xs tracking-[0.3em] uppercase font-source_sans_pro mb-3">
          Program Archive
        </p>
        <h2 className="font-playfair text-3xl md:text-4xl text-navy">
          Education &amp; Program Resources
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-14">
        {PROGRAM_SECTIONS.map(({ icon: Icon, title, description }) => (
          <div
            key={title}
            className="bg-white rounded-xl p-8 shadow-sm border border-gold/15"
          >
            <Icon size={22} className="text-gold mb-4" />
            <h3 className="font-playfair text-xl text-navy mb-3">{title}</h3>
            <p className="text-navy/65 text-sm leading-relaxed font-source_sans_pro">
              {description}
            </p>
          </div>
        ))}
      </div>

      <div className="bg-navy rounded-xl p-10 text-center">
        <h3 className="font-playfair text-3xl text-cream mb-3">
          Program Downloads
        </h3>
        <div className="w-14 h-0.5 bg-gold mx-auto mb-6" />
        <p className="text-cream/75 font-source_sans_pro max-w-2xl mx-auto leading-relaxed mb-8">
          As programs are added, they will appear here in chronological
          order for easy browsing and download.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {PROGRAM_DOWNLOADS.map(({ title, filename, href }) => (
            <a
              key={href}
              href={href}
              download
              className="flex items-center justify-between gap-3 rounded-lg border border-gold/35 bg-white/5 hover:bg-white/10 px-4 py-3 transition-colors"
            >
              <div className="text-left min-w-0">
                <p className="font-source_sans_pro text-cream text-sm">
                  {title}
                </p>
                <p className="font-source_sans_pro text-cream/60 text-xs">
                  View Program PDF
                </p>
              </div>
              <Download size={16} className="text-gold shrink-0" />
            </a>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const ListYourself = () => (
  <section className="bg-navy py-16">
    <div className="max-w-3xl mx-auto px-4 text-center">
      <h2 className="font-playfair text-3xl text-cream mb-4">
        Are You a Music Teacher?
      </h2>
      <p className="text-cream/60 leading-relaxed font-source_sans_pro mb-8">
        If you&#39;re a qualified music teacher in the Hot Springs area and
        would like to be listed in our directory, please reach out to us.
      </p>
      <Link
        to="/contact"
        className="inline-block bg-black hover:bg-neutral-800 text-white text-sm font-source_sans_pro tracking-wide uppercase px-7 py-3 transition-colors rounded-lg"
      >
        Get in Touch
      </Link>
    </div>
  </section>
);

export const Education = () => {
  usePageMeta({
    title: "Education & Programs",
    description:
      "Find qualified piano and instrumental music teachers and browse archived Hot Springs Music Connection program downloads in one place.",
  });
  return (
    <div>
      <PageHero />
      <Intro />
      <PianoTeachers />
      <InstrumentalTeachers />
      <ProgramsArchive />
      <ListYourself />
    </div>
  );
};
