import React, { useState } from "react";
import PropTypes from "prop-types"; // Import PropTypes
import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

function Icon({ id, open }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
    </svg>
  );
}

// Define PropTypes for Icon component
Icon.propTypes = {
  id: PropTypes.number.isRequired,
  open: PropTypes.number.isRequired,
};

const AccordionCustomIcon = () => {
  const [open, setOpen] = useState(0);

  const handleOpen = (value) => setOpen(prevOpen => (prevOpen === value ? 0 : value));

  return (
    <>
      {[
        { 
          id: 1, 
          title: "What can I watch on Netflix?", 
          content: "Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want."
        },
        { 
          id: 2, 
          title: "What is Netflix?", 
          content: "Netflix is a streaming service that offers a wide variety of award-wining TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices" 
        },
        { 
          id: 3, 
          title: "How much does Netflix cost", 
          content: "Whatch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from €17.99 to €4.99 a month. No extra costs, no contracts."
        },
        { 
          id: 4, 
          title: "Where can I watch?", 
          content: "Whatch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles."
        },
        { 
          id: 5, 
          title: "How do I cancel?", 
          content: "Netflix is flexible. There are no pesky contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees - start or stop your account anytime." 
        },
        { 
          id: 6, 
          title: "Is Netflix good for kids?", 
          content: "The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and movies in their own space. Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don't want kids to see." 
        }
      ].map(({ id, title, content }) => (
        <Accordion 
        key={id} 
        open={open === id} 
        icon={<Icon id={id} 
        open={open} />}
        className="w-[80dvw] flex flex-col gap-4"
        >
          <div><AccordionHeader 
          onClick={() => handleOpen(id)}
          className="text-white hover:text-white bg-gray-800 hover:bg-gray-700 mt-2 p-4 border-none"
          >
            {title}
          </AccordionHeader>
          <AccordionBody className=" bg-gray-800 p-4 text-white text-lg border-t-2 border-gray-900/50">
            {content}
          </AccordionBody></div>
        </Accordion>
      ))}
    </>
  );
}

export default AccordionCustomIcon;
