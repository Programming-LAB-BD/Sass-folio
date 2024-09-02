import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function SocialLink() {
  return (
    <div className="input-form-group mb-8 w-[100%] md:w-[550px]">
      <label htmlFor="input" className="font-medium pl-1">
        Social Link :
      </label>
      <div className="flex items-center gap-2">
        <div className="grid grid-flow-col grid-cols-3 gap-2 w-full">
          <select className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-1">
            <option value="">Facebook</option>
            <option value="">YouTube</option>
            <option value="">WhatsApp</option>
            <option value="">Instagram</option>
            <option value="">TikTok</option>
            <option value="">X (Twitter)</option>
            <option value="">Messenger</option>
            <option value="">Telegram</option>
            <option value="">LinkedIn</option>
          </select>
          <input
            type="text"
            placeholder="Enter Your Link"
            className="p-2 border rounded border-gray-900 bg-[#c7ebee] text-gray-900 col-span-2"
          />
        </div>
        <FontAwesomeIcon
          icon="fa-solid fa-circle-info"
          className="text-xl cursor-pointer"
        />
      </div>
      <div className="info text-xs text-zinc-400 mb-6">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Est nam
          porro, fugiat voluptatibus
        </p>
      </div>
    </div>
  );
}
