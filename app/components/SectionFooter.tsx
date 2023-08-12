import { getFooterData } from "../lib/getSanityData"
import { Footer } from "../lib/interface"

export default async function footer() {
  const footerData = (await getFooterData()) as Footer[]

  return (
    <>
      <footer>
        <ul>
          {footerData.map((footer) => (
            <li id={footer._id}>
              <span>
                {footer.copyRightText}
                <span>
                  {footer.footerLinks.map((link) => (
                    <a href={link.href}> {link.link}</a>
                  ))}
                </span>
              </span>
              <span>{footer.footerEmoji}</span>
              <span className=' block'>{footer.footerText}</span>
            </li>
          ))}
        </ul>
      </footer>
    </>
  )
}
