import React from 'react';
import styles from '../app/page.module.css';

export default function ContentSection() {
  return (
    <section className={styles.contentSection}>
      <div className={styles.contentContainer}>
        {/* Article content */}
        <article className={styles.article}>
          <p>
            The 11th IEEE ICCE 2026 is a prestigious event for researchers, experts, and companies to exchange and share their state-of-the-art research results in the field of Communication and Electronic Engineering. The three-day conference, held in Nha Trang City on July 29th - July 31st, 2026, will feature inspiring keynote talks delivered by world-class researchers, technical sessions, tutorials, and workshops.
          </p>
          <p>
            IEEE ICCE 2026 holds special significance, as it commemorates the 20th anniversary of the IEEE ICCE conference series and celebrates the 70th anniversary of Hanoi University of Science and Technology (HUST) — the proud host institution. These dual milestones mark two decades of excellence in advancing global research collaboration and seven decades of HUST's leadership in science, technology, and engineering education.
          </p>

          <h2 className={styles.sectionTitle}>SUBMISSION AND PUBLICATION</h2>
          <p>
            Prospective authors are invited to submit full papers with maximum length of 6 pages in PDF format via EDAS: <a href="#">https://edas.info/N34278</a>. Paper template can be referred to at <a href="#">IEEE standard template</a>.
          </p>
          <p>
            Full accepted papers will be published in the IEEE ICCE 2026 Conference Proceedings and submitted for inclusion in IEEE Xplore®. The proceedings of ICCE series are regularly indexed by SCOPUS and listed in Conference Proceeding Citation Index (CPCI) of Clarivate.
          </p>

          <h2 className={styles.sectionTitle}>SCOPE OF THE CONFERENCE</h2>
          <p>
            Contributed papers are solicited describing original works in electronics, communication engineering and related technologies. Topics and technical areas of interest include but are not limited to the following:
          </p>

          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem'}}>
            <div>
              <div className={styles.topicGroup}>
                <div className={styles.topicTitle}>I. COMMUNICATION NETWORKS AND SYSTEMS</div>
                <div className={styles.topicContent}>
                  <p><strong>Networking:</strong> Cloud/Fog/Edge Computing; Networking for Big Data; Social Networks; Network Security; IoT and Applications; AI in Networking; Network Infrastructure for AI; Mobile & Wireless Networks; Next-Generation Networking & Internet; Paradigms & Applications; Network Softwarization; Datacenter Networking; Network Optimization and Performance; Energy-Efficiency in Network and Cloud.</p>
                  <p><strong>Communication Systems:</strong> Modulation, coding, information theory, and communication security; MIMO, massive MIMO, and cell-free MIMO systems; mmWave, THz, and ultra-reliable low-latency communications; cognitive, cooperative, and green communications; integrated sensing and communication (ISAC); Semantic and quantum communications; RIS/IRS and stacked intelligent metasurfaces (SIM); AI- and ML-driven wireless networks, SDN, and NFV; IoT, V2X, and D2D communications; Satellite, UAV, and HAP networks; Optical, VLC, and radio-over-fiber (RoF) communications.</p>
                </div>
              </div>

              <div className={styles.topicGroup}>
                <div className={styles.topicTitle}>II. SIGNAL PROCESSING AND APPLICATIONS</div>
                <div className={styles.topicContent}>
                  <p><strong>Signal Processing:</strong> Signal Filtering, Detection and Estimation, Statistical Signal Processing and Modeling; Signal and Image Encryption; Multimedia Privacy, Security and Forensics; Biomedical Signal Processing and Systems; Signal Processing Fundamentals & Applications; Signal Processing in Communications.</p>
                  <p><strong>Multimedia Processing:</strong> Image/Video Processing, Analysis and Applications; Speech, Language, and Audio.</p>
                  <p><strong>Deep Learning and Machine Learning for Signal Processing:</strong> Machine Learning for Signal Processing; AI for Multimedia Understanding; Multimodal AI; Generative AI and LLM for Signal Processing; AI Foundations and Big Data for Signal Processing; Edge AI and Efficient ML; Human-AI Collaboration; Learned Data Coding and Processing.</p>
                </div>
              </div>

              <div className={styles.topicGroup}>
                <div className={styles.topicTitle}>V. POWER ELECTRONICS</div>
                <div className={styles.topicContent}>
                  <p><strong>Power Electronics Devices and Components.</strong></p>
                  <p><strong>Power Converter Topologies.</strong></p>
                  <p><strong>Converter Modelling, Design, and Control.</strong></p>
                  <p><strong>Power Electronics Applications:</strong> Renewable energy, EVs, smart grids, industrial drives, Energy Storage and Power Management, wireless power transfer, biomedical power electronics, aerospace, and defense systems.</p>
                </div>
              </div>
            </div>

            <div>
              <div className={styles.topicGroup}>
                <div className={styles.topicTitle}>III. MICROWAVE ENGINEERING</div>
                <div className={styles.topicContent}>
                  <p><strong>Microwave and Millimeter-Wave Devices and Components Design:</strong> Passive and Active Devices/Components, Integration Techniques, Nano-Scale Devices, Mm-Wave and THz Components.</p>
                  <p><strong>Antenna and Propagation:</strong> Compact Antennas, Reconfigurable and Smart Antennas, Beamforming, Massive MIMO Antennas, Phased Arrays, Measurements, Channel Modeling and Propagation, and Other related topics.</p>
                  <p><strong>EM Field Theory and Simulation Techniques:</strong> EM Theory, Modelling and Computational, Imaging, Metamaterials, Metasurfaces, Transparent Surfaces, Scattering and Diffraction, and Other EM-related topics.</p>
                  <p><strong>Microwave and Millimeter-Wave Systems and Applications:</strong> Sensing, Radar, Localization, Intelligent and Reconfigurable Surfaces, RFID, Wireless Power Transfer, Energy Harvesting, EMC/EMI, and Other related applications.</p>
                </div>
              </div>

              <div className={styles.topicGroup}>
                <div className={styles.topicTitle}>IV. ELECTRONIC SYSTEMS</div>
                <div className={styles.topicContent}>
                  <p>Digital, mixed-signal, analog/RF/mm-wave integrated circuits and systems.</p>
                  <p>Emerging technologies, circuits and applications including IoT, autonomous vehicles, FPGA-based and embedded systems.</p>
                  <p>EDA: System Design, Synthesis and Optimization; Formal Methods and Verification</p>
                  <p>Architectures and Systems: NoC, Multi-Core, Video and Multimedia, Embedded Systems, Reconfigurable Computing, System-Level Power Management, IoT Devices, Hardware Security, High Performance/Parallel Computing Platforms for Big Data.</p>
                  <p>Application Systems: Communication, Consumer and Multimedia; Medical and Healthcare; Spacecraft Avionics, Artificial Intelligence, Deep Learning.</p>
                </div>
              </div>

              <div className={styles.topicGroup}>
                <div className={styles.topicTitle}>SPECIAL SESSIONS</div>
                <div className={styles.topicContent}>
                  <p style={{color: 'var(--ptit-red)'}}>Special Session on Intelligent Multimodal Perception and Cognitive Engineering</p>
                  <p style={{color: 'var(--ptit-red)'}}>Special Session on Distributed AI across Edge-Cloud Continuum</p>
                  <p style={{color: 'var(--ptit-red)'}}>Special Session on 6G Non-Terrestrial Network Technologies Toward Global Coverage</p>
                  <p style={{color: 'var(--ptit-red)'}}>Special Session on Advances in Medical Imaging and Image Processing</p>
                  <p>Please visit <a href="#">https://ieee-icce.org/category/special-sessions</a> for more details.</p>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* Sidebar */}
        <aside className={styles.sidebar}>
          
          <div className={styles.sponsorBlock}>
            <div className={styles.sponsorHeader}>
              <div className={styles.sponsorIcon}>O</div>
              <h3>Organizes</h3>
            </div>
            <div className={styles.sponsorLogos}>
              <div className={styles.logoBox} style={{borderColor: 'var(--ptit-red)'}}>HUST Logo</div>
              <p style={{fontSize: '0.75rem', textAlign: 'center', maxWidth: '150px', fontWeight: 'bold'}}>Hanoi University of Science and Technology</p>
              
              <div className={styles.logoBox} style={{borderColor: 'var(--ptit-dark)'}}>DUT Logo</div>
              <p style={{fontSize: '0.75rem', textAlign: 'center', maxWidth: '150px', fontWeight: 'bold'}}>Danang University of Science and Technology</p>

              <div className={styles.logoBox} style={{borderColor: 'var(--ptit-dark)'}}>HCMUT Logo</div>
              <p style={{fontSize: '0.75rem', textAlign: 'center', maxWidth: '150px', fontWeight: 'bold'}}>Ho Chi Minh City University of Technology</p>
            </div>
          </div>

          <div className={styles.sponsorBlock}>
            <div className={styles.sponsorHeader}>
              <div className={styles.sponsorIcon}>$</div>
              <h3>Financial Sponsors</h3>
            </div>
            <div className={styles.sponsorLogos}>
              <div className={styles.logoBox} style={{borderColor: 'var(--ptit-dark)'}}>IEEE Vietnam Section</div>
            </div>
          </div>

          <div className={styles.sponsorBlock}>
            <div className={styles.sponsorHeader}>
              <div className={styles.sponsorIcon}>T</div>
              <h3>Technically Sponsors</h3>
            </div>
            <div className={styles.sponsorLogos}>
              <div className={styles.logoBox} style={{borderColor: 'var(--ptit-dark)'}}>IEEE Logo</div>
              <div className={styles.logoBox} style={{borderColor: '#000'}}>APS Logo</div>
              <div className={styles.logoBox} style={{borderColor: 'var(--accent-gold)'}}>Photonics Society Logo</div>
              <div className={styles.logoBox} style={{borderColor: 'var(--ptit-dark)'}}>KICS Logo</div>
            </div>
          </div>

          <div className={styles.sponsorBlock}>
            <div className={styles.sponsorHeader}>
              <div className={styles.sponsorIcon}>P</div>
              <h3>Platinum Sponsored by</h3>
            </div>
            <div className={styles.sponsorLogos}>
              <div className={styles.logoBox} style={{borderColor: 'var(--ptit-dark)'}}>SAMSUNG</div>
            </div>
          </div>

          <div className={styles.sponsorBlock}>
            <div className={styles.sponsorHeader}>
              <div className={styles.sponsorIcon}>G</div>
              <h3>Gold Sponsored by</h3>
            </div>
          </div>

          <div className={styles.sponsorBlock}>
            <div className={styles.sponsorHeader}>
              <div className={styles.sponsorIcon}>S</div>
              <h3>Silver Sponsored by</h3>
            </div>
          </div>

          <div className={styles.sponsorBlock}>
            <div className={styles.sponsorLogos} style={{marginTop: '1rem'}}>
              <div className={styles.logoBox} style={{borderColor: 'var(--ptit-dark)'}}>Tektronix</div>
            </div>
          </div>

          <div className={styles.sponsorBlock}>
            <div className={styles.sponsorHeader}>
              <div className={styles.sponsorIcon}>C</div>
              <h3>Contact</h3>
            </div>
            <div style={{fontSize: '0.85rem', width: '100%'}}>
              <p>Tel: +84-(0)2438694957</p>
              <p>E-mail: secretariat@ieee-icce.org</p>
            </div>
          </div>

        </aside>
      </div>
    </section>
  );
}
