const returnComment = (user, message, time) => {
  return `
       <div class="comment">
                <img
                  src="assets/images/avatar.svg"
                  alt="avatar-image"
                  class="comment-avatar"
                />
                <div class="comment-content-wrapper">
                  <div class="comment-row">
                    <p class="comment-author">${user}</p>
                    <p class="comment-date">&bull; ${time}</p>
                  </div>
                  <div class="comment-row-image">
                    <p class="comment-content">
                     ${message}
                    </p>
                  </div>
                  <div class="comment-row">
                    <img
                      src="./assets/images/icon-comment.svg"
                      alt=""
                      class="comment-rating"
                    />
                  </div>
                </div>
              </div>
      `;
};

const generateDateBefore = (daysBefore, type) => {
  let date = new Date();
  date.setDate(date.getDate() - daysBefore);
  let time = `${date.getDate().toString().padStart(2, "0")}.${(
    date.getMonth() + 1
  )
    .toString()
    .padStart(2, "0")}.${date.getFullYear()}`;
  if (type && type === "comment") {
    return date;
  }
  return time;
};

const commentsArray = [
  {
    type: "comment",
    author: "Marta Kochanová",
    avatar: "avatar.png",
    text: "Všeobecne okey, ale pomôže to aj môjmu 85-ročnému otcovi, ktorý je po 2 infarktoch a mozgovej príhode. Alebo to je už príliš vážny prípad? No a skutočne je možné získať tento prípravok zdarma? ",
    pictures: "",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Tomáš Struška",
    avatar: "avatar.png",
    text: "Už roky bojujem s aterosklerózou, a to som v mladosti som viedol zdravý životný štýl a dokázal som hory prenášať. Našťastie sa vďaka tomuto prípravku pomaly vraciam do bývalej formy. ",
    pictures: "",
    time: generateDateBefore(1, "comment"),
  },
  {
    type: "comment",
    author: "Gabriela Kalinová ",
    avatar: "avatar.png",
    text: "Vo februári 2022 som mala chronickú mozgovú príhodu. Skúšala som sa liečiť rôznymi spôsobmi, no nič z toho nepomáhalo. Mala som katastrofálne výsledky a tým pádom zlú náladu, tak to jednoducho bolo. Bála som sa, že už sa z toho nedostanem. Potom som sa dozvedela o tomto prípravku. Používala som ho niekoľko týždňov a ... úžasné. Cítim sa čoraz lepšie a tiež mám lepšie výsledky. Pomaly sa zotavujem... ",
    pictures: "",
    time: generateDateBefore(0, "comment"),
  },
  {
    type: "comment",
    author: "Marek Arpáš",
    avatar: "avatar.png",
    text: "Dobrý produkt. Mal som katastrofálne výsledky, lekári sa mi vyhrážali hroziacim infarktom. Môj syn mi našiel tento prípravok a ... výrazné zlepšenie. A to všetko ešte zadarmo.",
    pictures: "",
    time: generateDateBefore(3, "comment"),
  },
  {
    type: "comment",
    author: "Božena Šuranská ",
    avatar: "avatar.png",
    text: "@Marta ja som ho získala zdarma, tiež som ho kupovala pre staršiu osobu, ktorej hrozil tretí infarkt. Zo začiatku samozrejme vravela, že je to len strata času, lebo jej už aj tak nič nepomôže. Stačilo však, aby používala tento prípravok niekoľko týždňov a jej výsledky sa dramaticky zlepšili. Lekár povedal, že riziko tretieho infarktu prakticky neexistuje Ak budeš mať šťastie, tak sa ti tiež podarí získať bezplatné balenie, takže sa to oplatí vyskúšať. :)",
    pictures: "",
    time: generateDateBefore(2, "comment"),
  },

  {
    type: "comment",
    author: "Tomáš Pagáč",
    avatar: "avatar.png",
    text: "Manželka mi to objednala, lebo lekár mal u mňa podozrenie na aterosklerózu. Po užívaní tohto prípravku sa všetko vrátilo do normálu. Ešte sme dokonca obdržali balenie zdarma.",
    timestamp: "1 dzień temu",
    pictures: "zdj1.jpg",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Alexandra Dubovská",
    avatar: "avatar.png",
    text: "Objednala som ho preventívne pre manžela, ktorý pije, fajčí a jedáva mastné jedlá. Používa ho pravidelne 3 mesiace a jeho vnútorná pohoda a taktiež výsledky testov sú prakticky dokonalé. ",
    pictures: "",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Jana Žiaková",
    avatar: "avatar.png",
    text: "Úžasný prípravok, vrelo odporúčam.",
    pictures: "zdj2.jpg",
    time: generateDateBefore(2, "comment"),
  },
  {
    type: "comment",
    author: "Roman Kuruc",
    avatar: "avatar.png",
    text: "Vrelo odporúčam. Rýchle dodanie a rýchle účinky. ",
    timestamp: "2 dni temu",
    pictures: "zdj3.jpg",
    time: generateDateBefore(0, "comment"),
  },
];
