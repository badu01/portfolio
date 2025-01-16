import React from "react";
import ConnectButtons from "../components/ConnectButtons";
import ContactArrow from "../assets/svgs/ContactArrow";
import ContactMe from "../assets/svgs/ContactMe";

function ConnectMe() {
  return (
    <>
      <section id="connect">
        <div className="bg-green-main text-black-main divide divide-black-main cursor-round_black">
          <div className="flex justify-center">
            <ContactMe />
          </div>
          <hr />
          <div className="my-6">
            <div className="flex flex-col items-center">
              <h1 className="text-sm lg:text-xl">
                now that you are here -{" "}
                <span className="font-semibold"> let's connect!</span>
              </h1>
              <div className="flex justify-center gap-1 mt-3 lg:mt-5 lg:gap-5">
                <ConnectButtons
                  title="linkedin"
                  link={"https://www.linkedin.com/in/badusha-pareed-a13227255/"}
                  moblink={
                    "https://www.linkedin.com/in/badusha-pareed-a13227255/"
                  }
                />
                <ConnectButtons
                  title="github"
                  link={"https://github.com/badu01"}
                  moblink={
                    "https://github.com/badu01"
                  }
                />
                <ConnectButtons
                  title="gmail"
                  link={
                    "https://mail.google.com/mail/?view=cm&fs=1&to=badushapareeth777@gmail.com&su=Hello,I would like to connect with you!&body=i viewd your portfolio"
                  }
                  moblink={
                    "mailto:badushapareeth777@gmail.com?subject=Hello&body=I would like to connect with you!"
                  }
                />
              </div>
            </div>
          </div>
          {
            // this section is not currently used will be updated soon
            <div className="hidden">
              <div className="hidden">content</div>
              <div className="flex flex-row gap-3 pl-2 items-center">
                <ContactArrow />
                <div className="w-full">
                  <div>
                    <h1 className="font-bold text-lg">lets have a chat</h1>
                    <h1>let’s discuss!</h1>
                  </div>
                  <hr />
                  <div>
                    <h1 className="font-bold text-lg">lets work together</h1>
                    <h1>got ideas to share?</h1>
                  </div>
                </div>
              </div>
            </div>
          }
          <hr />
          <div className="flex justify-center px-10">
            <p>@badu 2025</p>
           {
            //<Link to='hero' duration={5000}>back to top</Link>
            
            }
          </div>
        </div>
      </section>
    </>
  );
}

export default ConnectMe;
