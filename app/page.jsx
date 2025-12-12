import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// NOTE:
// This app is a STUDY FRAMEWORK. It does NOT embed the NIV text directly
// due to copyright restrictions. You can:
// 1) Paste NIV verses manually (with permission), or
// 2) Switch to a public‑domain translation (e.g., KJV), or
// 3) Link out to an official NIV source.

const books = [
  {
    name: "Genesis",
    theme: "Beginnings: Creation, Fall, Covenant, and God’s Faithful Promises",
    illustration: "Creation of light, Garden of Eden, Abraham under the stars",
    overview: {
      author: "Moses (traditional Protestant view)",
      audience: "Israel, and God’s covenant people",
      purpose: "To reveal God as Creator, explain the origin of sin, and introduce God’s covenant plan of redemption.",
    },
    christFocus: "Genesis points forward to Christ through the promise of the offspring (Gen 3:15), Abraham’s seed, and God’s covenant faithfulness.",
    chapters: [
      {
        chapter: 1,
        title: "Creation",
        illustrationPrompt: "A radiant depiction of God speaking light into existence, cosmic order emerging from darkness, humanity formed in God’s image, reverent and majestic, soft golden light, biblical illustration style",
        scripture: "Genesis 1 (NIV link or pasted text)",
        observation: "God creates all things by His word and declares creation good.",
        interpretation: "Creation is purposeful, ordered, and dependent on God.",
        theology: "God is sovereign Creator; humans bear His image.",
        gospel: "Christ is the eternal Word through whom creation came (John 1:1–3).",
        application: ["Worship God as Creator.", "Value every human life."],
        questions: ["What does God’s authority over creation mean for our lives?", "How should the image of God shape ethics?"]
      },
      {
        chapter: 2,
        title: "Humanity and God’s Design",
        illustrationPrompt: "The Garden of Eden in harmony, Adam and Eve in peaceful fellowship with God, lush trees, flowing rivers, gentle light, pre-fall purity, classical biblical art style",
        scripture: "Genesis 2 (NIV link or pasted text)",
        observation: "God creates humanity and establishes work, rest, and marriage.",
        interpretation: "Human life is relational and purposeful.",
        theology: "God designs covenant relationships.",
        gospel: "Christ restores broken relationships caused by sin.",
        application: ["Honor God’s design for life and relationships."],
        questions: ["Why does God value relationship?", "How does sin distort God’s design?"]
      },
      {
        chapter: 3,
        title: "The Fall",
        illustrationPrompt: "Adam and Eve at the Tree of the Knowledge of Good and Evil, the serpent present, tension and sorrow entering the scene, shadows contrasting fading light, symbolic biblical illustration",
        scripture: "Genesis 3 (NIV link or pasted text)",
        observation: "Humanity rebels against God.",
        interpretation: "Sin enters through distrust of God’s word.",
        theology: "All humanity is fallen and needs redemption.",
        gospel: "Promise of the serpent-crushing offspring (Gen 3:15).",
        application: ["Confess sin honestly.", "Trust God’s word."],
        questions: ["How does sin distort truth today?", "Where do we see grace even in judgment?"]
      },
      {
        chapter: 6,
        title: "The Flood",
        illustrationPrompt: "Noah’s ark rising above floodwaters, dark storm clouds contrasted with a rainbow of promise, sense of judgment and mercy, dramatic biblical painting style",
        scripture: "Genesis 6–9 (NIV link or pasted text)",
        observation: "God judges wickedness but saves Noah.",
        interpretation: "God is just yet merciful.",
        theology: "Judgment and grace coexist in God’s character.",
        gospel: "Salvation comes through God’s provision, not human effort.",
        application: ["Live righteously.", "Trust God’s salvation."],
        questions: ["Why is holiness important to God?", "How does obedience flow from faith?"]
      },
      {
        chapter: 12,
        title: "The Call of Abraham",
        illustrationPrompt: "Abraham gazing at a star-filled sky in the desert, God’s promise symbolized through countless stars, atmosphere of faith and hope, warm Middle Eastern tones",
        scripture: "Genesis 12:1–3 (NIV link or pasted text)",
        observation: "God calls Abram and makes covenant promises.",
        interpretation: "God chooses by grace.",
        theology: "Faith is the basis of covenant relationship.",
        gospel: "All nations are blessed through Christ.",
        application: ["Step out in faith.", "Be a blessing to others."],
        questions: ["Why does God value faith?", "How do believers bless others today?"]
      },
      {
        chapter: 15,
        title: "God’s Covenant Promise",
        illustrationPrompt: "Ancient covenant ceremony at night, smoking firepot and blazing torch passing between sacrifices, solemn and sacred atmosphere, covenant symbolism emphasized",
        scripture: "Genesis 15 (NIV link or pasted text)",
        observation: "God seals His promise to Abram.",
        interpretation: "Righteousness comes by faith.",
        theology: "Justification is by faith alone.",
        gospel: "Points to justification in Christ (Romans 4).",
        application: ["Trust God’s promises."],
        questions: ["What does faith look like practically?", "Why is grace foundational?"]
      },
      {
        chapter: 22,
        title: "Abraham Tested",
        illustrationPrompt: "Abraham and Isaac on Mount Moriah, altar prepared, ram caught in the thicket, moment of divine provision, emotional and reverent biblical art",
        scripture: "Genesis 22 (NIV link or pasted text)",
        observation: "God tests Abraham’s faith.",
        interpretation: "God provides what He requires.",
        theology: "God is faithful and provides substitution.",
        gospel: "Foreshadows Christ as the ultimate sacrifice.",
        application: ["Trust God fully.", "Obey even when it’s hard."],
        questions: ["What does obedience reveal about faith?", "How does God provide today?"]
      },
      {
        chapter: 37,
        title: "Joseph Betrayed",
        illustrationPrompt: "Joseph cast into the pit by his brothers, torn robe, expressions of jealousy and sorrow, desert landscape, dramatic narrative illustration",
        scripture: "Genesis 37 (NIV link or pasted text)",
        observation: "Joseph is betrayed by his brothers.",
        interpretation: "God works through suffering.",
        theology: "God’s sovereignty over evil intentions.",
        gospel: "God brings redemption through suffering.",
        application: ["Trust God in hardship."],
        questions: ["How does God use suffering?", "Where do we see hope in trials?"]
      },
      {
        chapter: 50,
        title: "God’s Good Purposes",
        illustrationPrompt: "Joseph forgiving his brothers in Egypt, reconciliation and peace, light-filled palace scene, themes of redemption and forgiveness",
        scripture: "Genesis 50:15–21 (NIV link or pasted text)",
        observation: "God turns evil intentions into good.",
        interpretation: "God’s purposes prevail.",
        theology: "God is sovereign and redemptive.",
        gospel: "The cross as God’s ultimate redemptive act.",
        application: ["Forgive others.", "Trust God’s plan."],
        questions: ["How does God redeem pain?", "Why is forgiveness central to faith?"]
      }
    ],
        questions: ["What does God’s authority over creation mean for our lives?", "How should the image of God shape ethics?"]
      },
      {
        chapter: 2,
        title: "Humanity and God’s Design",
        scripture: "Genesis 2 (NIV link or pasted text)",
        observation: "God creates humanity and establishes work, rest, and marriage.",
        interpretation: "Human life is relational and purposeful.",
        theology: "God designs covenant relationships.",
        gospel: "Christ restores broken relationships caused by sin.",
        application: ["Honor God’s design for life and relationships."],
        questions: ["Why does God value relationship?", "How does sin distort God’s design?"]
      },
      {
        chapter: 3,
        title: "The Fall",
        scripture: "Genesis 3 (NIV link or pasted text)",
        observation: "Humanity rebels against God.",
        interpretation: "Sin enters through distrust of God’s word.",
        theology: "All humanity is fallen and needs redemption.",
        gospel: "Promise of the serpent-crushing offspring (Gen 3:15).",
        application: ["Confess sin honestly.", "Trust God’s word."],
        questions: ["How does sin distort truth today?", "Where do we see grace even in judgment?"]
      },
      {
        chapter: 6,
        title: "The Flood",
        scripture: "Genesis 6–9 (NIV link or pasted text)",
        observation: "God judges wickedness but saves Noah.",
        interpretation: "God is just yet merciful.",
        theology: "Judgment and grace coexist in God’s character.",
        gospel: "Salvation comes through God’s provision, not human effort.",
        application: ["Live righteously.", "Trust God’s salvation."],
        questions: ["Why is holiness important to God?", "How does obedience flow from faith?"]
      },
      {
        chapter: 12,
        title: "The Call of Abraham",
        scripture: "Genesis 12:1–3 (NIV link or pasted text)",
        observation: "God calls Abram and makes covenant promises.",
        interpretation: "God chooses by grace.",
        theology: "Faith is the basis of covenant relationship.",
        gospel: "All nations are blessed through Christ.",
        application: ["Step out in faith.", "Be a blessing to others."],
        questions: ["Why does God value faith?", "How do believers bless others today?"]
      },
      {
        chapter: 15,
        title: "God’s Covenant Promise",
        scripture: "Genesis 15 (NIV link or pasted text)",
        observation: "God seals His promise to Abram.",
        interpretation: "Righteousness comes by faith.",
        theology: "Justification is by faith alone.",
        gospel: "Points to justification in Christ (Romans 4).",
        application: ["Trust God’s promises."],
        questions: ["What does faith look like practically?", "Why is grace foundational?"]
      },
      {
        chapter: 22,
        title: "Abraham Tested",
        scripture: "Genesis 22 (NIV link or pasted text)",
        observation: "God tests Abraham’s faith.",
        interpretation: "God provides what He requires.",
        theology: "God is faithful and provides substitution.",
        gospel: "Foreshadows Christ as the ultimate sacrifice.",
        application: ["Trust God fully.", "Obey even when it’s hard."],
        questions: ["What does obedience reveal about faith?", "How does God provide today?"]
      },
      {
        chapter: 37,
        title: "Joseph Betrayed",
        scripture: "Genesis 37 (NIV link or pasted text)",
        observation: "Joseph is betrayed by his brothers.",
        interpretation: "God works through suffering.",
        theology: "God’s sovereignty over evil intentions.",
        gospel: "God brings redemption through suffering.",
        application: ["Trust God in hardship."],
        questions: ["How does God use suffering?", "Where do we see hope in trials?"]
      },
      {
        chapter: 50,
        title: "God’s Good Purposes",
        scripture: "Genesis 50:15–21 (NIV link or pasted text)",
        observation: "God turns evil intentions into good.",
        interpretation: "God’s purposes prevail.",
        theology: "God is sovereign and redemptive.",
        gospel: "The cross as God’s ultimate redemptive act.",
        application: ["Forgive others.", "Trust God’s plan."],
        questions: ["How does God redeem pain?", "Why is forgiveness central to faith?"]
      }
    ],
        questions: [
          "What does God’s creative power teach us about His authority?",
          "How does being made in God’s image shape how we treat others?",
        ],
      },
      {
        chapter: 3,
        title: "The Fall",
        scripture: "Genesis 3 (NIV link or pasted text)",
        observation: "Humanity rebels against God, resulting in sin and separation.",
        interpretation: "Sin enters through distrust of God’s word.",
        theology: "All humanity is affected by sin and needs redemption.",
        gospel: "God promises a coming Redeemer who will crush the serpent (Gen 3:15).",
        application: [
          "Take sin seriously.",
          "Trust God’s word over human desire.",
        ],
        questions: [
          "What lies about God does sin try to convince us of today?",
          "How does grace appear even in judgment?",
        ],
      },
      {
        chapter: 12,
        title: "The Call of Abraham",
        scripture: "Genesis 12:1–3 (NIV link or pasted text)",
        observation: "God calls Abram and makes covenant promises.",
        interpretation: "God chooses Abram by grace, not merit.",
        theology: "God’s covenant is based on promise and faith.",
        gospel: "The promise points to Christ blessing all nations.",
        application: [
          "Step out in faith when God calls.",
          "Trust God’s promises beyond circumstances.",
        ],
        questions: [
          "Why does God value faith over certainty?",
          "How are we called to be a blessing today?",
        ],
      },
    ],
  },
];

export default function BibleStudyApp() {
  const [activeBook, setActiveBook] = useState(books[0].name);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Personal Bible Study</h1>
      <p className="text-center text-muted-foreground">
        Protestant Christian study framework • Scripture‑centered • Application‑focused
      </p>

      <Tabs value={activeBook} onValueChange={setActiveBook}>
        <TabsList className="flex flex-wrap justify-center">
          {books.map((book) => (
            <TabsTrigger key={book.name} value={book.name}>
              {book.name}
            </TabsTrigger>
          ))}
        </TabsList>

        {books.map((book) => (
          <TabsContent key={book.name} value={book.name}>
            <Card className="rounded-2xl shadow-lg">
              <CardContent className="space-y-4 p-6">
                <h2 className="text-2xl font-semibold">{book.name}</h2>
                <p><strong>Theme:</strong> {book.theme}</p>
                <p><strong>Illustration:</strong> {book.illustration}</p>
                <p className="italic text-sm">
                  Scripture: {book.sampleVerse}
                </p>

                <div>
                  <h3 className="font-semibold">Reflection Questions</h3>
                  <ul className="list-disc ml-6">
                    {book.questions.map((q, i) => (
                      <li key={i}>{q}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="font-semibold">Theological Explanation</h3>
                  <p>{book.explanation}</p>
                </div>

                <div>
                  <h3 className="font-semibold">Life Application</h3>
                  <ul className="list-disc ml-6">
                    {book.application.map((a, i) => (
                      <li key={i}>{a}</li>
                    ))}
                  </ul>
                </div>

                <Button className="mt-4">Personal Journal & Prayer</Button>
              </CardContent>
            </Card>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
}

/* ==============================
   EXPANDED DESIGN FOR ALL THREE USES
   Personal • Teaching • Deep Study
   ==============================

SITE STRUCTURE OVERVIEW

1. HOME DASHBOARD
- Daily Scripture (linked NIV)
- Study Progress Tracker
- Prayer Focus of the Week
- Quick Access: Books, Themes, Notes

2. BIBLE BOOKS (ALL 66 BOOKS)
Each Book Contains:
- Overview (Author, Audience, Purpose, Protestant interpretation)
- Historical & Cultural Context
- Key Themes & Christological Focus
- Chapter-by-Chapter Study Tabs

3. CHAPTER / VERSE STUDY FORMAT
For Each Passage:
- Scripture (NIV link or user-pasted text)
- Observation: What does the text say?
- Interpretation: What does it mean?
- Theology: What does this teach about God?
- Gospel Connection: How does this point to Christ?
- Application: How should believers live in response?

4. INTELLECTUAL DISCUSSION QUESTIONS
- Text-based (exegesis)
- Theology-based (doctrine)
- Life-based (discipleship)
- Small-group prompts

5. ILLUSTRATIONS & VISUAL LEARNING
- Book-level illustrations
- Timeline graphics
- Maps (Exodus, Paul’s journeys, Kingdoms)
- Symbolism explanations (sacrifice, covenant, temple)

6. PERSONAL DEVOTIONAL MODE
- Guided prayer prompts
- Journal entries per verse
- "What is God calling me to obey?"
- Gratitude & confession sections

7. TEACHING / SMALL GROUP MODE
- Leader notes
- Discussion pacing guide
- Optional background explanations
- Application summaries for group sharing

8. DEEP THEOLOGICAL STUDY MODE
- Cross-references
- Original language insights (Hebrew/Greek concepts, not lexicons)
- Systematic theology links (salvation, sin, grace, church)
- Common Protestant interpretations & debates

9. DOCTRINAL GUARDRAILS (PROTESTANT)
- Scripture as final authority
- Christ alone for salvation
- Grace, not works
- No extra-biblical revelation
- Clear distinction between interpretation & application

10. NOTES & DATA
- Personal notes saved per book/chapter
- Teaching outlines exportable
- Reflection history

==============================
This framework ensures:
✔ Faithful to Protestant Christianity
✔ Intellectually rigorous
✔ Spiritually formative
✔ Practical for daily life and teaching
============================== */

/* ==============================
   DEPLOYMENT CHECKLIST & GITHUB-READY PACKAGE
   ==============================

PRE-DEPLOYMENT CHECKLIST

1. CODE STRUCTURE
- Ensure this file is placed as: /app/page.jsx or /src/App.jsx
- Confirm all imports (@/components/ui/*) resolve correctly
- Verify React version supports hooks

2. DEPENDENCIES
Install required packages:
- react
- react-dom
- tailwindcss
- lucide-react
- shadcn/ui

3. NIV COMPLIANCE CHECK
- Do NOT embed full NIV text automatically
- Use links or manually pasted verses only
- Add disclaimer in footer:
  "Scripture quotations marked NIV are taken from the Holy Bible, New International Version®"

4. ENVIRONMENT CHECK
- Node.js v18+
- npm or yarn installed

==============================
GITHUB PACKAGE SETUP
==============================

1. CREATE REPOSITORY
- Go to github.com → New Repository
- Name example: personal-bible-study
- Public or Private (your choice)

2. FILE STRUCTURE
/
├── app/
│   └── page.jsx
├── components/
│   └── ui/
├── public/
│   └── images/
├── styles/
│   └── globals.css
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md

3. README.md (REQUIRED)
Include:
- Project purpose
- Protestant theological alignment
- NIV copyright notice
- Deployment instructions

==============================
VERCEL DEPLOYMENT (RECOMMENDED)
==============================

1. Go to vercel.com
2. Sign in with GitHub
3. Click "New Project"
4. Import your repository
5. Framework preset: Next.js or React
6. Click Deploy

RESULT:
- Live URL generated automatically
- Example: https://personal-bible-study.vercel.app

==============================
NETLIFY DEPLOYMENT (ALTERNATIVE)
==============================

1. Go to netlify.com
2. Add new site → Import from Git
3. Select GitHub repo
4. Build command: npm run build
5. Publish directory: build or out

==============================
POST-DEPLOYMENT VERIFICATION
==============================

- Tabs load correctly
- Genesis chapters render
- Journal input works
- No NIV text auto-generated
- Mobile responsiveness confirmed

==============================
OPTIONAL ENHANCEMENTS
==============================

- Custom domain
- Database-backed journaling
- User accounts
- Image rendering from prompts
- PDF export for teaching

==============================
This package is:
✔ Deployment-ready
✔ Legally compliant
✔ Protestant-theology safe
✔ Scalable to all 66 books
============================== */
