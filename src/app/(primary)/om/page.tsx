import Image from "next/image";

export default function Om() {


  return (
    <div className="container relative max-w-xl pt-6 md:pt-0 pb-16 sm:pb-12 mx-auto space-y-4 sm:space-y-24 px-5 lg:max-w-5xl lg:min-h-[768px]">
      <div className="mt-4 w-full flex sm:hidden justify-center">
        <div className="h-32 w-32">

          <Image className="rounded-full object-cover h-full w-full shadow-md"
            src="/images/sara.jpg"
            quality={90}
            width={500}
            height={400}
            alt="Sara" />
        </div>
      </div>
      <div className="grid lg:gap-24 lg:grid-cols-2">
        <div>
          <h1 className="text-2xl font-bold tracking-tight sm:text-5xl text-lash-pink-600 max-w-[490px]">Om mig</h1>
          <div className="flex w-16 h-1 sm:h-2 bg-lash-pink-700 mt-5 sm:mt-12"></div>
          <div className="space-y-2 mt-4">

            <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600">Kærligt velkommen hos mig i min lille skønhedsoase og drøm. </h3>
            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased mt-4">
              Mit navn er Sara, og jeg er indehaver af Skincare by Hammer.  Jeg er uddannet pædagog i 2013 og har siden da arbejdet med forskellige målgrupper indenfor den pædagogiske verden.
              I mit virke som pædagog har jeg arbejdet meget med empati, nærvær, rummelighed og omsorg, hvilket har gjort mig bedre til at forstå, skabe tryghed og ro omkring de mennesker jeg er sammen med. Jeg føler at jeg virkelig kan drage nytte af min pædagogiske baggrund i mødet med jer kunder.
              Jeg har altid haft et ønske om at ville prøve kræfter med noget andet end at være pædagog, og har jeg i flere år haft en drøm om at åbne min egen lille klinik.
              Derfor har jeg i marts 2024 åbnet min egen skønhedsklinik Skincare by Hammer, som er mit lille hjertebarn. Jeg brænder for det her fag og for at skabe flotte resultater. Glæden hos mig er kæmpe stor, når en afslappet, smilende og tilfreds kunde forlader klinikken med flotte bryn og vipper.</p>
            <h3 className="text-lg sm:text-2xl font-bold leading-6 text-lash-pink-600 pt-4 sm:pt-0">Uddannelse</h3>
            <p className="block font-sans text-base font-normal leading-relaxed text-inherit antialiased mt-4">Jeg er uddannet Lashlift,- og Browlamination Stylist v. Artistry by Mie Thorsen i September 2023.</p>

          </div>
        </div>
        <div className="hidden sm:flex">
        <Image className="rounded-full object-cover h-full w-full shadow-md"
            src="/images/sara.jpeg"
            quality={90}
            width={500}
            height={400}
            alt="Sara" />
        </div>
      </div>
    </div>
  );
}