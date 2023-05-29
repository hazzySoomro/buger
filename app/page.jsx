import Sectionfour from './components/Sectionfour';
import Sectionone from './components/Sectionone';
import Sectionthree from './components/Sectionthree';
import Sectiontwo from './components/Sectiontwo';

export default function Home() {
  return (
    <main className="font-sans">
      {/* section 1 */}
      <Sectionone />
      {/* section 2 */}
      <Sectiontwo />
      {/* section 3 */}
      <Sectionthree />
      {/* Section 4 */}
      <Sectionfour />
    </main>
  );
}
