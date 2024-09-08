import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink({ states }) {
  const { facebook, setFacebook, instagram, setInstagram, twitter, setTwitter, github, setGithub, linkedin, setLinkedin } = states
  
  // Facebook Controller here
  const handleFacebok = (e) => {
    setFacebook((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };
  
  // Instagram Controller here
  const handleInstagram = (e) => {
    setInstagram((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };
  
  // Twitter Controller here
  const handleTwitter = (e) => {
    setTwitter((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };
  
  // Github Controller here
  const handleGithub = (e) => {
    setGithub((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };
  
  // Linkedin Controller here
  const handleLinkedin = (e) => {
    setLinkedin((prev) => {
      return {
        ...prev,
        value: e.target.value,
        forSubmit: true,
      };
    });
  };

  return (
    <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
      <label htmlFor="input" className="font-medium pl-1">
        Social Link :
      </label>
      <div className="flex items-center gap-2">
        <div className="w-full">
          <div className="flex mb-2">
            <span className="inline-flex items-center justify-center w-[120px] p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-2"><FontAwesomeIcon icon="fa-brands fa-facebook" className="text-2xl" /></span>
            <input type="text" className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 block w-full" placeholder="Enter Your Link" onChange={handleFacebok} value={facebook.value} />
          </div>
          <div className="flex mb-2">
            <span className="inline-flex items-center justify-center w-[120px] p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-2"><FontAwesomeIcon icon="fa-brands fa-instagram" className="text-2xl" /></span>
            <input type="text" className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 block w-full" placeholder="Enter Your Link" onChange={handleInstagram} value={instagram.value} />
          </div>
          <div className="flex mb-2">
            <span className="inline-flex items-center justify-center w-[120px] p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-2"><FontAwesomeIcon icon="fa-brands fa-x-twitter" className="text-2xl" /></span>
            <input type="text" className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 block w-full" placeholder="Enter Your Link" onChange={handleTwitter} value={twitter.value} />
          </div>
          <div className="flex mb-2">
            <span className="inline-flex items-center justify-center w-[120px] p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-2"><FontAwesomeIcon icon="fa-brands fa-github" className="text-2xl" /></span>
            <input type="text" className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 block w-full" placeholder="Enter Your Link" onChange={handleGithub} value={github.value} />
          </div>
          <div className="flex mb-2">
            <span className="inline-flex items-center justify-center w-[120px] p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-2"><FontAwesomeIcon icon="fa-brands fa-linkedin" className="text-2xl" /></span>
            <input type="text" className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 block w-full" placeholder="Enter Your Link" onChange={handleLinkedin} value={linkedin.value} />
          </div>
        </div>
      </div>
    </div>
  );
}
