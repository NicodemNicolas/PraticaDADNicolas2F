import Card from './components/card/card';
import styles from './app.module.css'

function App() {
  return (
    <div>
      <h1>PLANS +</h1>
      <div className={styles.container}>
        <Card plano='FREE' valor='$0' />
        <Card plano='PREMIUN' valor='$99' />
        <Card plano='PRO' valor='$199' />
      </div>
      <h1>New Member +</h1>
      <div className={styles.container}>
        <Card plano='FREE' valor='$0' />
        <Card plano='PREMIUN' valor='$99' />
        <Card plano='PRO' valor='$199' />
      </div>
    </div>
  );
}

export default App;