import profileImage from '../../assets/profile.png';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl md:text-5xl mb-12 text-center text-gray-900">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <p className="text-lg text-gray-600 mb-6">
              I am a passionate and detail-oriented Penetration Tester with a strong foundation in networking,
              cybersecurity principles, and ethical hacking methodologies. My goal is to help organizations
              identify vulnerabilities before attackers do, strengthen their security posture, and build
              resilient systems against modern cyber threats.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              I have successfully completed the Cisco Certified Network Associate (CCNA) coursework, where I
              gained solid knowledge in networking fundamentals, routing and switching, network security, IP
              services, and troubleshooting. This networking background allows me to deeply understand
              infrastructure-level vulnerabilities and attack surfaces.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              In addition, I completed professional penetration testing training at DEPI (Digital Egypt Pioneers
              Initiative), where I gained hands-on experience in vulnerability assessment, web application
              testing, network penetration testing, privilege escalation techniques, and security reporting.
              During my training, I worked with industry-standard tools and methodologies aligned with
              real-world security operations.
            </p>
            <div className="mb-6">
              <p className="text-lg font-semibold text-gray-800 mb-3">Relevant Courses &amp; Certifications:</p>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>CCNA – Cisco Certified Network Associate</li>
                <li>Network Security Fundamentals</li>
                <li>Ethical Hacking &amp; Penetration Testing</li>
                <li>Web Application Penetration Testing</li>
                <li>Vulnerability Assessment &amp; Exploitation</li>
                <li>Linux for Cybersecurity</li>
                <li>Python for Security Professionals</li>
                <li>OWASP Top 10 &amp; Web Security Testing</li>
                <li>Digital Egypt Pioneers Initiative (DEPI) – Penetration Testing Track</li>
              </ul>
            </div>
            <p className="text-lg text-gray-600">
              I am continuously learning and staying updated with emerging threats, security tools, and best
              practices. I am driven by curiosity, persistence, and a commitment to ethical standards in
              cybersecurity.
            </p>
          </div>

          <div className="order-1 md:order-2">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={profileImage}
                alt="Mahmoud Elbahie"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}