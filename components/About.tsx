import { asset } from "$fresh/runtime.ts";

export default function About() {
  return (
    <section id="about" class="mt-8">
      <h2 class="text-3xl text-teal-50 my-6">
        <div className="flex flex-wrap">
          <span>Hi, I'm Alex 👋🏽</span>
          <span class="md:block">&nbsp;</span>
          <span>Nice to meet you!</span>
        </div>
        <hr class="border-[3px] border-teal-400 my-2 rounded-lg md:w-2/3 lg:w-1/2" />
      </h2>
      <div className="flex items-start justify-between">
        <div class="space-y-5 text-lg w-2/3 lg:w-9/12">
          <p>
            I am a full stack developer located in Houston, TX. I enjoy making
            things that are pretty and accessible to as many folks as possible!
            I specialize in frontend technologies, but am always comfortable
            finding the right solution for any given problem.
          </p>
          <p>
            But enough stuffy professional jobspeak, Let's talk about fun stuff!
          </p>
          <p>
            I am a daydreamer who gets lost envisioning a better world. I am
            driven by curiousity and kindness. If I had nothing else to do, I
            would spend my day walking through the streets of Houston, bathed in
            heat and smiling as I get a taste of every yummy morsel of food I
            find.
          </p>
          <p>
            I love people. I love food. I love games found on the tabletop and
            on the screen.
          </p>
          <p>
            In another life I was a coffee roaster, and by other life I mean I
            used to be a coffee roaster and it was so much fun. I also love
            coffee. Chances are if I'm not at home, I'm at a coffee shop. Chat
            with me about coffee anytime honestly.
          </p>
          <p>
            Anyways, I hope you enjoyed this little tidbit of info. Thanks for
            taking some time outta your day to read these words ✨
          </p>
        </div>
        <img
          class="sm:(w-52 h-52) object-cover animate__animated animate__fadeIn h-24 w-24 rounded-full"
          src={asset("avatar.jpg")}
          alt="avatar"
        />
      </div>
    </section>
  );
}
