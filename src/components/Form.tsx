
const Form = ({myMail}:{myMail:string}) => {
    if(!myMail) console.log('mail is not found')
  return (
     <form
              action={`https://formsubmit.co/${myMail}`}
              method="POST"
              className="space-y-6"
            >
              {/* Full Name */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-(--primary) mb-3">
                  FULL NAME
                </label>
                <input
                  type="text"
                  name="fullName"
                  required
                  placeholder="Emanuel Lasker"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                />
              </div>

              {/* Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-(--primary) mb-3">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="lasker@chess.com"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wide text-(--primary) mb-3">
                    PHONE
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="+1 (234) 567-890"
                    className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                  />
                </div>
              </div>

              {/* WhatsApp Number */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-(--primary) mb-3">
                  WHATSAPP NUMBER
                </label>
                <input
                  type="tel"
                  name="whatsapp"
                  required
                  placeholder="+1 (234) 567-8900"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                />
              </div>

              {/* Student Age */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-(--primary) mb-3">
                  STUDENT AGE
                </label>
                <input
                  type="number"
                  name="studentAge"
                  required
                  placeholder="e.g., 12"
                  min="5"
                  max="100"
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white placeholder:text-gray-500 focus:outline-none focus:border-white/30"
                />
              </div>

              {/* Skill Level */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wide text-(--primary) mb-3">
                  CURRENT SKILL LEVEL
                </label>
                <select
                  name="skillLevel"
                  required
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white appearance-none focus:outline-none focus:border-white/30"
                  style={{
                    backgroundImage:
                      'url(\'data:image/svg+xml;utf8,<svg fill="white" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 10l5 5 5-5z"/></svg>\')',
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "right 12px center",
                    backgroundSize: "24px",
                    paddingRight: "40px",
                  }}
                >
                  <option value="">Select Skill Level</option>
                  <option value="Absolute Beginner">
                    Absolute Beginner (Doesn't know how pieces move)
                  </option>
                  <option value="Beginner">
                    Beginner (Knows the rules but no strategy)
                  </option>
                  <option value="Intermediate">
                    Intermediate (Plays online/knows basic tactics)
                  </option>
                  <option value="Advanced">
                    Advanced (Has a rating or plays in tournaments)
                  </option>
                </select>
              </div>

              {/* FormSubmit hidden fields */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value={window.location.href} />
              <button
                type="submit"
                className="w-full btn-queen py-3 px-4 font-bold uppercase tracking-wide text-sm rounded transition-all hover:scale-105 duration-300 mt-4"
              >
                JOIN NOW
              </button>
            </form>
  )
}

export default Form