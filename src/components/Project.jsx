import dogStay from "../assets/dog_stay.png"
import dogStayAdmin from "../assets/dog_stay_admin.png"
import trainingLog from "../assets/training_log.png"
function Project() {
  return (
    <section id="project" className="project">
      <h2 className="section-title">Projects</h2>
      <div className="projects">
        <div className="card">
          <h3>Dog Salon</h3>
          <img src={dogStay} alt="dogStay" />
          <p>ペットサロンLP 予約ページ</p>
          <p className="tech">HTML / CSS / JavaScript </p>
          <div className="links">
            <a href="https://07yuki1101.github.io/dog_salon/" target="_blank" rel="noreferrer">Demo</a>
            <a href="https://github.com/07yuki1101/dog_salon" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="card">
          <h3>Dog Salon Admin</h3>
          <img src={dogStayAdmin} alt="dogStayAdmin" />
          <p>ペットサロンの予約、顧客管理システム</p>
          <p className="tech">React / Firebase</p>
          <div className="links">
            <a href="https://dog-stay-admin.vercel.app/" target="_blank" rel="noreferrer">Demo</a>
            <a href="https://github.com/07yuki1101/dog-stay-admin" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <div className="card">
          <h3>Training Log</h3>
          <img src={trainingLog} alt="trainingLog" />
          <p>トレーニング記録アプリ</p>
          <p className="tech">React / Firebase Auth / Firestore / Recharts</p>

          <div className="links">
            <a href="https://training-log-app-tau.vercel.app/" target="_blank" rel="noreferrer">Demo</a>
            <a href="https://github.com/07yuki1101/training-log-app" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Project;