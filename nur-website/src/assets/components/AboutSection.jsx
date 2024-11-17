import GalataTower from "../media/images/galata.png";
import 'tailwindcss/tailwind.css';

const AboutSection = () => {
  return (
    <section
      id="about"
      className="flex flex-col-reverse lg:flex-row justify-between items-center py-10 gap-10"
    >
      {/* Text Container */}
      <div className="flex flex-col items-start lg:w-1/2 mx-12 lg:pl-24 ">
        <h2 className="text-2xl lg:text-3xl font-bold italic text-whitesmoke">
          I am
        </h2>
        <ul className="list-disc pl-5 text-whitesmoke p-6 max-w-lg space-y-4 text-lg">
          <li>
            a Stockholm-based UX/UI designer and front-end web developer.
          </li>
          <li>
            from Turkey’s Istanbul, the kingdom of cats, dogs, and seagulls!
          </li>
          <li>
            a music enthusiast, gamer, party lover and a friend
            of animals.
          </li>
          <li>
            someone who enjoys designing and building digital spaces that are of help and
            joy to others.
          </li>
        </ul>
        <a
          href="/AboutPage"
          className="bg-accentPrimary py-2 px-4 rounded-md hover:bg-accentPrimary-dark transition flex justify-center items-center gap-2"
        >
          <span className="text-sm font-medium text-black">More about me</span>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFyElEQVR4nO1ZbUxTZxR+7iVAS9aOghRZJGz+YCQDl4zotk4IdqYsxI0WXCYoGR9GUxzKlsw5EzAVyTYlzNmRrGaBiSBioWsnhtICLQVRFKYwPzKdczqV6fzYdG7KdFtOck0aVm3vBbQmfZLzq8m553nf857znFMggAACCMANYQCUAN4HoAfQDKABgAHAxwDyAcTDzyADkAfABOC6SCQ6npCQ4EpPT3cWFhb2FRcX9+fl5fUplUrn9OnT97MsexEA2RcAnn+UgdPH6wDcDA8P/3bJkiW9ZrP5987Ozn+92bZt286mpqY6WJYdBbCXu7WHhmcoNRiGuZqSkuJobGwc9SVoT2az2e6sWrVqX3Bw8A8A6gFETWXgDID3APyWnJzstFgs14UGPt7a29vH5s2b5wBAN/LqVAQvAfB1SEjIyZqamhPeAtqxY8dofX39Bb5ENmzYMMwwzCUAuZMZ/BMA+mfMmLFvz549f/kSiEKh6AJwOyUlxdXR0XGHD4mtW7eeYln2FwBvTBYBc2xsbD/lq69BZGRkEIFvAPTIZLJDJpOJV7pVV1cf425iwiU3nx5YW1vbn3wC0Ol0BwEMAQgCsCU4OPi0wWD4iY8PjUbTQwfAvT1BEAP4ed26dYf55rLVar3FMMxlAM9yvpZT1SouLh7gU6FCQ0NPAHhd8OmHhYUdE1pZ5s6d28V143t4GcD52bNnu2w2211ffCxdurQPgF0oAWd2dnavUAItLS2XGIa5AuApN58xAPrkcvnB3bt33/Tmg0o1NUoA4ULkwdiKFSsGVq5cOaTT6Yb1ev3Jurq6s55Mr9efoYd3zyorK4+UlZUNSSSSwwA+G+c7BECjRCIZ8YUE5yODL4FXSNcAOED1n24DwBEAp3ywYQD7AdgAtAMY8eCfHne9VCodbmtreyCJ+Ph4F4BS+CFY0lJ0E2az+cb9CKSlpVGH/gh+ChbAl2Kx+Hhzc/NlTwTmz59PBKrhx2AAfEjKVKfTjXgg0A1gEx4DvAbg6uLFi/vdCSQnJxOBMjwmeJMaoDuBmTNnUjdejscAL1Dn12g0LncCkZGRAwDU8HPkUvoUFRX9r3GKRKKjABRChvMCTgoY3KwJwC4AHVyL38VZLff7Ji5fP+DsbS/fCQVQw7Ls+Y0bNx7xVIVYlr3ATYG8sEUsFh9TKpUOtVrdpVKpnGRZWVkdOTk5PVqt1kXDelFRkSsnJ8e1cOFCB/2elpbWNWfOHGdiYmK3RCI5BOD0A74RR41SJpMNGo3GK/cRdGMAbnHdmxdali1btl+oDiKLiIigLv7OA1LmskKh6LTb7fedMxoaGs4AoBvgDYtWq/VZ+o63zZs3U96eByAa51cOoJVE3tq1awe9+amoqBgEQI+YNz5fsGBBn1ACMTExtCp5d5zPbACXoqKiBnbu3HnRFz+ZmZnd3LaCNxbJ5XKvJ+TJamtrfwRwhVsEECJIfdJDpXfDx1dcXBwJOa0QAlIKYvv27bx3PklJSQ631k8y+BwpSovF8gcfP1ardYyb6nhXoHv4JDo6+iCfj5pMpmsMw1zjpq+vaLuwevXqA0JusrS0tJ+T84JBKXC2pKTE5wDUajWd/m2aombNmuVsbW31WB69md1uvysWi2n+WIQJ4kXaxK1fv/47Xz7c1NQ0umbNmgGj0ehRGvtqGo3G4bbVmDBUDMOMlpeXD08kKF+tsrKSRkhKwyRMIl6iEpient5rs9n+margKyoqDnMLrUnbyrnjaQDdUql0RK/Xn5rMwK1W698qlYrS5le6cUzx9FRCt5GQkLDXYDCcmehWuqCgoI9br3dxh/RQ8CSAcuoVkZGRQ/n5+f1Go/GarxWmqqrqaGpqqjMoKOgcANej1Psku98ifQPghkgk+j42NnafUqnsIZVKlpubu1etVrsSExN7p02bNsgwDKUJaaVPATwHP0IIN1UVcmsQAzcn0J98VdxuJwtA9KMONIAAAoD/4D9EGG+2Y2ahjQAAAABJRU5ErkJggg==" alt="arrow--v2" style={{maxHeight:"2rem"}}></img>

        </a>
      </div>

      {/* Image */}
      <img
        src={GalataTower}
        alt="About Image"
        className=" lg:w-auto lg:h-[80vh] w-full h-auto object-contain"
      />
    </section>
  );
};

export default AboutSection;
