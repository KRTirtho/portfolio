import DottedHeader from "@/components/ui/dotted-header";
import SkillItem from "./skill-item";
import colors from "tailwindcss/colors";

const skills = {
  JavaScript: [
    "javascript-colored",
    "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
    colors.yellow[500],
  ],
  TypeScript: [
    "typescript-colored",
    "https://www.typescriptlang.org/",
    colors.blue[800],
  ],
  Dart: ["dart-colored", "https://dart.dev/", colors.teal[500]],
  Rust: ["rust-colored", "https://www.rust-lang.org/", colors.orange[500]],
  Go: ["go-colored", "https://go.dev/doc/", colors.cyan[500]],
  Kotlin: ["kotlin-colored", "https://kotlinlang.org/", colors.purple[500]],
  HTML5: [
    "html5-colored",
    "https://developer.mozilla.org/en-US/docs/Glossary/HTML5",
    colors.orange[700],
  ],
  CSS3: ["css3-colored", "https://www.w3.org/TR/CSS/#css", colors.blue[800]],
  Flutter: ["flutter-colored", "https://flutter.dev/", colors.sky[400]],
  React: ["react-colored", "https://reactjs.org/", colors.sky[500]],
  NextJS: ["nextjs-colored", "https://nextjs.org/docs", colors.gray[800]],
  Remix: ["remix-colored", "https://remix.run/", colors.gray[800]],
  Vue: ["vuejs-colored", "https://vuejs.org/", colors.green[600]],
  Svelte: ["svelte-colored", "https://svelte.dev/", colors.orange[400]],
  Sass: ["sass-colored", "https://sass-lang.com/", colors.pink[400]],
  TailwindCSS: [
    "tailwindcss-colored",
    "https://tailwindcss.com/",
    colors.teal[500],
  ],
  Bootstrap: [
    "bootstrap-colored",
    "https://getbootstrap.com/",
    colors.purple[700],
  ],
  MaterialUI: ["materialui-colored", "https://mui.com/", colors.cyan[700]],
  NodeJS: ["nodejs-colored", "https://nodejs.org/en/", colors.green[400]],
  Deno: [
    "https://upload.wikimedia.org/wikipedia/commons/8/84/Deno.svg",
    "https://deno.land/",
    colors.gray[800],
  ],
  Express: ["express-colored", "https://expressjs.com/", colors.gray[800]],
  NestJS: ["nestjs-colored", "https://docs.nestjs.com/", colors.red[600]],
  GraphQL: ["graphql-colored", "https://graphql.org/", colors.pink[400]],
  MongoDB: ["mongodb-colored", "https://www.mongodb.com/", colors.green[500]],
  PostgreSQL: [
    "postgresql-colored",
    "https://www.postgresql.org/",
    colors.blue[800],
  ],
  Supabase: ["supabase-colored", "https://supabase.io/", colors.green[300]],
  Firebase: [
    "firebase-colored",
    "https://firebase.google.com/",
    colors.orange[400],
  ],
  Heroku: ["heroku-colored", "https://www.heroku.com/", colors.purple[800]],
  Docker: ["docker-colored", "https://www.docker.com/", colors.blue[400]],
};

const SkillsModule = () => {
  return (
    <section id="skills" className="space-y-6">
      <DottedHeader>Skills</DottedHeader>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Object.entries(skills).map(([skill, [icon, link, color]]) => (
          <SkillItem
            key={skill}
            src={icon}
            link={link}
            skill={skill}
            color={color}
          />
        ))}
      </div>
    </section>
  );
};

export default SkillsModule;
