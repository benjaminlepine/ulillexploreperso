import { rest } from "msw"
import R from "../resources";

let hasUnmatchGodchild = false

export default [
    rest.post(R.endpoint.signin(),
        (req,
         res, ctx) => {
            return res(
                ctx.json({
                    createAt: "2021-09-30T15:25:55.609+00:00",
                    email: "benjamin.lepine@gmail.com",
                    firstname: "benjamin",
                    id: 6,
                    lastname: "Lépine",
                    profile: null,
                    roles: ["STUDENT_EXTERN"],
                    token: "eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJiZW5qYW1pbi5sZXBpbmVAZ21haWwuY29tIiwiaWF0IjoxNjMzMDE1NTkxLCJleHAiOjE2MzMxMDE5OTEsImF1ZCI6IndlcC1hcHAifQ.tYuDX8BfqvNh9js2u7z5bI3A2pZCZdjfEuSaDXAoDWk-ArWeIyaJkLiEdDywrFWIb1iWPks1L8aa04hJ1c39eQ",
                    type: "Bearer"
                })
            )
        }),
    rest.get(R.endpoint.fetchAmbassadorProfile(),
        (req,
         res, ctx) => {
            return res(
                ctx.json({
                    blog: "https://fr.wikipedia.org/wiki/Ours_blanc#:~:text=L'ours%20blanc%20(Ursus%20maritimus,carnivore)%20originaire%20des%20r%C3%A9gions%20arctiques.&text=Cette%20esp%C3%A8ce%20vit%20uniquement%20sur,bord%20de%20l'oc%C3%A9an%20Arctique.",
                    component: "Philosopie",
                    country: "Allemagne",
                    exchange: "Toto Echange",
                    interview: "2021-09-03",
                    isUE: false,
                    publication: "Bonjour, c'est un test",
                    university: "Berlin"
                })
            )
        }),
    rest.get(R.endpoint.fetchGodchildProfile(),
        (req,
         res, ctx) => {
            let godfathers;
            if(!hasUnmatchGodchild){
                godfathers =
                    {
                        active: true,
                        createAt: "2021-09-15T23:00:13.422+00:00",
                        email: "arthur@levingston.org",
                        firstname: "Arhur",
                        id: 2,
                        lastname: "Levingston"
                    }

            } else {
                godfathers = null
            }
            return res(
                ctx.json({
                    godfather: godfathers,
                    profile: {
                        active: true,
                        activities: [0, 1],
                        availabilities: [22022, 52022, 82022],
                        createAt: "2021-09-15T23:51:00.542+00:00",
                        department: "Histoirede l'art et Archéologie",
                        email: "djenaba.bah@gmail.com",
                        en: false,
                        faculty: "Humanités",
                        firstname: "Djenaba",
                        hobbies: [0, 1],
                        id: 1,
                        lastname: "Bah",
                        nationality: "Albania",
                        scoreValue: 0,
                        spokenLanguages: [0, 2],
                        studyCycle: "Master",
                        updateAt: "2021-09-16T15:43:09.300+00:00",
                    }
                })
            )
        }),
    rest.post(R.endpoint.deleteGodfatherMatchWithGodchild(),
        (req,
         res, ctx) => {
            hasUnmatchGodchild = true;
            return res()
        }),


]
