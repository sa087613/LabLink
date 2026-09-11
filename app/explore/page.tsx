"use client";
import { IntroChrome } from "@/components/intro-chrome";
import { GradientBackground } from "@/components/paper-design-shader-background";
import React, { useState } from 'react';
import { Search, Tag, ArrowRight, Users } from 'lucide-react';
import { FaLinkedin, FaGithub } from "react-icons/fa6";
import { Plus, Check } from "lucide-react";
import { useLabList } from "@/app/context/lab-list-context";

const FOOTER_LINKS = {
  Product: [
    { label: "How it works", href: "/#how-it-works" },
    { label: "FAQ", href: "/#faq" },
  ],
  Company: [{ label: "Contact", href: "/contact" }],
  Legal: [
    { label: "Terms of service", href: "/terms" },
    { label: "Privacy policy", href: "/privacy" },
  ],
};

interface Lab {
  name: string;
  description: string;
  department: string;
  pi: string;
  piAvatar: string;
  image: string;
  tags: string[];
  slug: string;
  link: string;
}

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const { addLab, isInList } = useLabList();
  const departments = ['All', 'Computer Science', 'Chemical Engineering', 'Biomedical Engineering', "Industrial Engineering", "Aerospace Engineering", "Mechanical Engineering", ];
  const labs: Lab[] = [
  {
    name: "Comparch Lab",
    description: "Computer Science lab open to students with backgrounds in CS, ECE.",
    department: "Computer Science",
    pi: "Tom Conte, Hadi Esmaeilzadeh, Hyesoon Kim, Santosh Pande, Milos Prvulovic, Kishore Ramachandran",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "ECE"],
    slug: "comparch-lab",
    link: "https://comparch.gatech.edu/",
  },
  {
    name: "Data Systems and Analytics Group",
    description: "Computer Science lab open to students with backgrounds in CS, IE, Math.",
    department: "Computer Science",
    pi: "Joy Arulraj, Xu Chu, Constantine Dovrolis, Vladimir Kolesnikov, Ling Liu, Kexin Rong, Shamkant Navathe, Calton Pu, Jun Xu",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "IE", "Math"],
    slug: "data-systems-and-analytics-group",
    link: "https://db.cc.gatech.edu/",
  },
  {
    name: "Distributed Data Intensive Systems Lab",
    description: "Computer Science lab open to students with backgrounds in CS, ECE.",
    department: "Computer Science",
    pi: "Ling Liu, Calton Pu",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "ECE"],
    slug: "distributed-data-intensive-systems-lab",
    link: "https://www.cc.gatech.edu/~lingliu/DiSL/",
  },
  {
    name: "Efficient and Intelligent Computing Lab",
    description: "Computer Science lab open to students with backgrounds in CS, ECE.",
    department: "Computer Science",
    pi: "Yingyan Lin",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "ECE"],
    slug: "efficient-and-intelligent-computing-lab",
    link: "https://eiclab.scs.gatech.edu/",
  },
  {
    name: "Embedded Pervasive Lab",
    description: "Computer Science lab open to students with backgrounds in CS, ECE.",
    department: "Computer Science",
    pi: "Kishore Ramachandran",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "ECE"],
    slug: "embedded-pervasive-lab",
    link: "https://epl.gatech.edu/",
  },
  {
    name: "Hardware Security Lab",
    description: "Computer Science lab open to students with backgrounds in CS, ECE.",
    department: "Computer Science",
    pi: "Daniel Genkin",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "ECE"],
    slug: "hardware-security-lab",
    link: "https://architecture.fail/",
  },
  {
    name: "Internet Intelligence Research Lab",
    description: "Computer Science lab open to students with backgrounds in CS, ECE.",
    department: "Computer Science",
    pi: "Alberto Dainotti, Zachary Bischof, Cecilia Testart, Amanda Meng",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "ECE"],
    slug: "internet-intelligence-research-lab",
    link: "https://inetintel.notion.site/",
  },
  {
    name: "Korvo Research Group",
    description: "Computer Science lab open to students with backgrounds in CS, ECE.",
    department: "Computer Science",
    pi: "Ada Gavrilovska, Greg Eisenhauer, Matthew Wolf, Jeff Young",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "ECE"],
    slug: "korvo-research-group",
    link: "https://korvo.gatech.edu/",
  },
  {
    name: "Systems Software & Security Lab",
    description: "Computer Science lab open to students with backgrounds in CS, Cybersecurity, ECE.",
    department: "Computer Science",
    pi: "Taesoo Kim",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "Cybersecurity", "ECE"],
    slug: "systems-software-security-lab",
    link: "https://sslab.gtisc.gatech.edu/",
  },
  {
    name: "Networks Lab",
    description: "Computer Science lab open to students with backgrounds in CS, ECE.",
    department: "Computer Science",
    pi: "Mostafa Ammar, Constantine Dovrolis, Jun Xu, Ellen Zegura, Russ Clark",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "ECE"],
    slug: "networks-lab",
    link: "https://nrg.cc.gatech.edu/",
  },
  {
    name: "Theory Lab",
    description: "Computer Science lab open to students with backgrounds in CS, Math, IE.",
    department: "Computer Science",
    pi: "Jacob Abernethy, Richard Lipton, Will Perkins, Dana Randall, Mohit Singh, Sahil Singla, Santosh Vempala",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "Math", "IE"],
    slug: "theory-lab",
    link: "https://www.scs.gatech.edu/groups-labs",
  },
  {
    name: "Visual Analytics Lab",
    description: "Computer Science lab open to students with backgrounds in CS, IE, Psychology.",
    department: "Computer Science",
    pi: "Alex Endert",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "IE", "Psychology"],
    slug: "visual-analytics-lab",
    link: "https://va.gatech.edu/",
  },
  {
    name: "Social Dynamics and Wellbeing Lab",
    description: "Computer Science lab open to students with backgrounds in CS, Psychology, Public Policy.",
    department: "Computer Science",
    pi: "Munmun De Choudhury",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "Psychology", "Public Policy"],
    slug: "social-dynamics-and-wellbeing-lab",
    link: "https://socweb.cc.gatech.edu/",
  },
  {
    name: "Contextual Computing Group",
    description: "Computer Science lab open to students with backgrounds in CS, ECE, BME.",
    department: "Computer Science",
    pi: "Thad Starner",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "ECE", "BME"],
    slug: "contextual-computing-group",
    link: "https://cc.gatech.edu/ccg/",
  },
  {
    name: "Entertainment Intelligence and Human-Centered AI Lab",
    description: "Computer Science lab open to students with backgrounds in CS, Computational Media.",
    department: "Computer Science",
    pi: "Mark Riedl",
    piAvatar: "/buzz/CS.png",
    image: "/banners/CS.png",
    tags: ["CS", "Computational Media"],
    slug: "entertainment-intelligence-and-human-centered-ai-lab",
    link: "https://eilab.gatech.edu/",
  },
  {
    name: "Abramson Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ChemE, ME.",
    department: "Biomedical Engineering",
    pi: "Alex Abramson",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ChemE", "ME"],
    slug: "abramson-lab",
    link: "https://www.abramsonlab.com/",
  },
  {
    name: "Ackun-Farmmer Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ME, Neuroscience.",
    department: "Biomedical Engineering",
    pi: "Marian Ackun-Farmmer",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ME", "Neuroscience"],
    slug: "ackun-farmmer-lab",
    link: "https://sites.gatech.edu/ackunfarmerlab/",
  },
  {
    name: "Ultrasound Biophysics Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ECE, Physics.",
    department: "Biomedical Engineering",
    pi: "Costas Arvanitis",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ECE", "Physics"],
    slug: "ultrasound-biophysics-lab",
    link: "https://arvanitis.gatech.edu/",
  },
  {
    name: "Babensee Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ChemE, Biology.",
    department: "Biomedical Engineering",
    pi: "Julia Babensee",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ChemE", "Biology"],
    slug: "babensee-lab",
    link: "https://babenseelab.bme.gatech.edu/",
  },
  {
    name: "Botchwey Laboratory",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, Biology, MSE.",
    department: "Biomedical Engineering",
    pi: "Edward Botchwey",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "Biology", "MSE"],
    slug: "botchwey-laboratory",
    link: "https://botchweylab.gatech.edu/",
  },
  {
    name: "Buckley Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ECE, Physics.",
    department: "Biomedical Engineering",
    pi: "Erin Buckley",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ECE", "Physics"],
    slug: "buckley-lab",
    link: "https://buckleylab.bme.gatech.edu/",
  },
  {
    name: "Neurolab / Butera Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ECE, Neuroscience.",
    department: "Biomedical Engineering",
    pi: "Robert Butera",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ECE", "Neuroscience"],
    slug: "neurolab-butera-lab",
    link: "https://butera.gatech.edu/",
  },
  {
    name: "Biomedical Mechatronics Laboratory",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ME, ECE.",
    department: "Biomedical Engineering",
    pi: "Yue Chen",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ME", "ECE"],
    slug: "biomedical-mechatronics-laboratory",
    link: "https://sites.gatech.edu/chenlab/",
  },
  {
    name: "Clifford Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, CS, ECE.",
    department: "Biomedical Engineering",
    pi: "Gari Clifford",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "CS", "ECE"],
    slug: "clifford-lab",
    link: "https://www.gdclifford.info/",
  },
  {
    name: "Single Cell Biotechnology Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, Biology, CS.",
    department: "Biomedical Engineering",
    pi: "Ahmet Coskun",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "Biology", "CS"],
    slug: "single-cell-biotechnology-lab",
    link: "https://singlecell.bme.gatech.edu/",
  },
  {
    name: "Dahlman Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ChemE, Biology.",
    department: "Biomedical Engineering",
    pi: "James Dahlman",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ChemE", "Biology"],
    slug: "dahlman-lab",
    link: "https://www.dahlmanlab.org/",
  },
  {
    name: "Cardiovascular Fluid Mechanics Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ME, AE.",
    department: "Biomedical Engineering",
    pi: "Lakshmi Prasad Dasi",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ME", "AE"],
    slug: "cardiovascular-fluid-mechanics-lab",
    link: "https://sites.gatech.edu/dasilab/",
  },
  {
    name: "Medical Robotics and Automation Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ME, ECE, CS.",
    department: "Biomedical Engineering",
    pi: "Jaydev Desai",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ME", "ECE", "CS"],
    slug: "medical-robotics-and-automation-lab",
    link: "https://robomed.gatech.edu/",
  },
  {
    name: "Laboratory of Lymphatic Biology and Bioengineering",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, Biology, ME.",
    department: "Biomedical Engineering",
    pi: "Brandon Dixon",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "Biology", "ME"],
    slug: "laboratory-of-lymphatic-biology-and-bioengineering",
    link: "https://llbb.gatech.edu/",
  },
  {
    name: "Douglas-Green Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, Biology, ChemE.",
    department: "Biomedical Engineering",
    pi: "Simone Douglas-Green",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "Biology", "ChemE"],
    slug: "douglas-green-lab",
    link: "https://sites.gatech.edu/douglasgreenlab/",
  },
  {
    name: "Emanuel Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, Neuroscience, Biology.",
    department: "Biomedical Engineering",
    pi: "Alan Emanuel",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "Neuroscience", "Biology"],
    slug: "emanuel-lab",
    link: "https://www.emanuellab.com/",
  },
  {
    name: "Ultrasound Imaging and Therapeutics Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ECE, Physics.",
    department: "Biomedical Engineering",
    pi: "Stanislav Emelianov",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ECE", "Physics"],
    slug: "ultrasound-imaging-and-therapeutics-lab",
    link: "https://ultrasound.gatech.edu/",
  },
  {
    name: "Ethier Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ME, Biology.",
    department: "Biomedical Engineering",
    pi: "C. Ross Ethier",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ME", "Biology"],
    slug: "ethier-lab",
    link: "https://ethier.gatech.edu/",
  },
  {
    name: "Feola Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ME, Neuroscience.",
    department: "Biomedical Engineering",
    pi: "Andrew Feola",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ME", "Neuroscience"],
    slug: "feola-lab",
    link: "https://feola.bme.gatech.edu/",
  },
  {
    name: "Fleischer Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ECE, Physics.",
    department: "Biomedical Engineering",
    pi: "Candace Fleischer",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ECE", "Physics"],
    slug: "fleischer-lab",
    link: "https://fleischerlab.org/",
  },
  {
    name: "Fong Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, Neuroscience, Biology.",
    department: "Biomedical Engineering",
    pi: "Ming-fai Fong",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "Neuroscience", "Biology"],
    slug: "fong-lab",
    link: "https://fong-lab.github.io/",
  },
  {
    name: "Precision Biosystems Laboratory",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, BME, ECE.",
    department: "Mechanical Engineering",
    pi: "Craig Forest",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "BME", "ECE"],
    slug: "precision-biosystems-laboratory",
    link: "https://pbl.gatech.edu/",
  },
  {
    name: "Garcia Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ChemE, MSE.",
    department: "Biomedical Engineering",
    pi: "Andrés García",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ChemE", "MSE"],
    slug: "garcia-lab",
    link: "https://garcialab.gatech.edu/",
  },
  {
    name: "Haider Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, Neuroscience, ECE.",
    department: "Biomedical Engineering",
    pi: "Bilal Haider",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "Neuroscience", "ECE"],
    slug: "haider-lab",
    link: "https://haider.gatech.edu/",
  },
  {
    name: "Hollister Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ME, MSE.",
    department: "Biomedical Engineering",
    pi: "Scott Hollister",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ME", "MSE"],
    slug: "hollister-lab",
    link: "https://hollisterlab.bme.gatech.edu/",
  },
  {
    name: "Jang Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, Biology, ChemE.",
    department: "Biomedical Engineering",
    pi: "Young Charles Jang",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "Biology", "ChemE"],
    slug: "jang-lab",
    link: "https://www.janglabgatech.org/",
  },
  {
    name: "Redox Systems Biology Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ChemE, Biology.",
    department: "Biomedical Engineering",
    pi: "Melissa Kemp",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ChemE", "Biology"],
    slug: "redox-systems-biology-lab",
    link: "https://kemp.gatech.edu/",
  },
  {
    name: "Laboratory for Synthetic Immunity",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ChemE, Biology.",
    department: "Biomedical Engineering",
    pi: "Gabe Kwong",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ChemE", "Biology"],
    slug: "laboratory-for-synthetic-immunity",
    link: "https://lsi.gatech.edu/",
  },
  {
    name: "Lam Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ME, Biology.",
    department: "Biomedical Engineering",
    pi: "Wilbur Lam",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ME", "Biology"],
    slug: "lam-lab",
    link: "https://lamlab.bme.gatech.edu/",
  },
  {
    name: "Translational Neurotrauma Laboratory",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, Neuroscience, ME.",
    department: "Biomedical Engineering",
    pi: "Michelle LaPlaca",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "Neuroscience", "ME"],
    slug: "translational-neurotrauma-laboratory",
    link: "https://laplaca.gatech.edu/",
  },
  {
    name: "Ultrasonic Imaging and Instrumentation Lab",
    description: "Biomedical Engineering lab open to students with backgrounds in BME, ECE, Physics.",
    department: "Biomedical Engineering",
    pi: "Brooks Lindsey",
    piAvatar: "/buzz/BME.png",
    image: "/banners/BME.png",
    tags: ["BME", "ECE", "Physics"],
    slug: "ultrasonic-imaging-and-instrumentation-lab",
    link: "https://lindsey.gatech.edu/",
  },
  {
    name: "Aerospace Computational Engineering Group",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, CS, Math.",
    department: "Aerospace Engineering",
    pi: "Elizabeth Qian",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "CS", "Math"],
    slug: "aerospace-computational-engineering-group",
    link: "https://www.elizabethqian.com/",
  },
  {
    name: "Aerospace Systems Design Laboratory",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, IE, CS.",
    department: "Aerospace Engineering",
    pi: "Dimitri Mavris",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "IE", "CS"],
    slug: "aerospace-systems-design-laboratory",
    link: "https://www.asdl.gatech.edu/",
  },
  {
    name: "Computational and Experimental Rotorcraft Engineering and Aerodynamics Lab",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME.",
    department: "Aerospace Engineering",
    pi: "Juergen Rauleder",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME"],
    slug: "computational-and-experimental-rotorcraft-engineering-and-aerodynamics-lab",
    link: "https://sites.gatech.edu/cereal/",
  },
  {
    name: "Digital Engineering Laboratory for Transformative Aerospace",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, CS, IE.",
    department: "Aerospace Engineering",
    pi: "Olivia Fischer",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "CS", "IE"],
    slug: "digital-engineering-laboratory-for-transformative-aerospace",
    link: "https://ae.gatech.edu/ae-research/ae-labs-centerscollaborative-groups",
  },
  {
    name: "Dynamics and Control Systems Laboratory",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME, ECE.",
    department: "Aerospace Engineering",
    pi: "Panagiotis Tsiotras",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME", "ECE"],
    slug: "dynamics-and-control-systems-laboratory",
    link: "https://dcsl.gatech.edu/",
  },
  {
    name: "Engineering Space Policy Laboratory",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, Public Policy, IE.",
    department: "Aerospace Engineering",
    pi: "Thomas González Roberts",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "Public Policy", "IE"],
    slug: "engineering-space-policy-laboratory",
    link: "https://espl.ae.gatech.edu/",
  },
  {
    name: "Foundations of Learning and Intelligent Robots Lab",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, CS, ECE.",
    department: "Aerospace Engineering",
    pi: "Yongxin Chen",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "CS", "ECE"],
    slug: "foundations-of-learning-and-intelligent-robots-lab",
    link: "https://flair.ae.gatech.edu/",
  },
  {
    name: "High-Power Electric Propulsion Laboratory",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME, Physics.",
    department: "Aerospace Engineering",
    pi: "Mitchell Walker",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME", "Physics"],
    slug: "high-power-electric-propulsion-laboratory",
    link: "https://mwalker.gatech.edu/",
  },
  {
    name: "Intelligent Cyber-Physical Systems Laboratory",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ECE, CS.",
    department: "Aerospace Engineering",
    pi: "Kyriakos Vamvoudakis",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ECE", "CS"],
    slug: "intelligent-cyber-physical-systems-laboratory",
    link: "https://ae.gatech.edu/ae-research/ae-labs-centerscollaborative-groups",
  },
  {
    name: "Lasers and Fluids Group",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME, Physics.",
    department: "Aerospace Engineering",
    pi: "Adam Steinberg",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME", "Physics"],
    slug: "lasers-and-fluids-group",
    link: "https://steinberg.ae.gatech.edu/",
  },
  {
    name: "Low-Gravity Science and Technology Lab",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME, BME.",
    department: "Aerospace Engineering",
    pi: "Álvaro Romero-Calvo",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME", "BME"],
    slug: "low-gravity-science-and-technology-lab",
    link: "https://lowgravitylab.ae.gatech.edu/",
  },
  {
    name: "Lunar Navigation and Autonomous Robotics Lab",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, CS, ECE.",
    department: "Aerospace Engineering",
    pi: "Lu Gan",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "CS", "ECE"],
    slug: "lunar-navigation-and-autonomous-robotics-lab",
    link: "https://sites.gatech.edu/lunarlab/",
  },
  {
    name: "Multiphysics Mechanics of Materials Lab",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME, MSE.",
    department: "Aerospace Engineering",
    pi: "Julian Rimoli",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME", "MSE"],
    slug: "multiphysics-mechanics-of-materials-lab",
    link: "https://m3lab.gatech.edu/",
  },
  {
    name: "Nonlinear Computational Aeroelasticity Lab",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME, CS.",
    department: "Aerospace Engineering",
    pi: "Marilyn Smith",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME", "CS"],
    slug: "nonlinear-computational-aeroelasticity-lab",
    link: "https://www.msmith.gatech.edu/",
  },
  {
    name: "Reacting Flow and Diagnostic Group",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME, ChemE.",
    department: "Aerospace Engineering",
    pi: "Wenting Sun",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME", "ChemE"],
    slug: "reacting-flow-and-diagnostic-group",
    link: "https://ae.gatech.edu/ae-research/ae-labs-centerscollaborative-groups",
  },
  {
    name: "Space Exploration Analysis Laboratory",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, CS, Physics.",
    department: "Aerospace Engineering",
    pi: "Koki Ho",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "CS", "Physics"],
    slug: "space-exploration-analysis-laboratory",
    link: "https://seal.ae.gatech.edu/",
  },
  {
    name: "Space Systems Design Laboratory",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ECE, ME.",
    department: "Aerospace Engineering",
    pi: "E. Glenn Lightsey",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ECE", "ME"],
    slug: "space-systems-design-laboratory",
    link: "https://ssdl.gatech.edu/",
  },
  {
    name: "Space Systems Optimization Group",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, IE, Math.",
    department: "Aerospace Engineering",
    pi: "Koki Ho",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "IE", "Math"],
    slug: "space-systems-optimization-group",
    link: "https://ssog.ae.gatech.edu/",
  },
  {
    name: "Structural Dynamics and Aeroelasticity Research Laboratory",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME, CS.",
    department: "Aerospace Engineering",
    pi: "Cristina Riso",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME", "CS"],
    slug: "structural-dynamics-and-aeroelasticity-research-laboratory",
    link: "https://www.cristinariso.com/",
  },
  {
    name: "Computational Laboratory for Aerodynamics and Aeroacoustics Research",
    description: "Aerospace Engineering lab open to students with backgrounds in AE, ME, CS.",
    department: "Aerospace Engineering",
    pi: "Suresh Menon",
    piAvatar: "/buzz/Aerospace.png",
    image: "/banners/AE.png",
    tags: ["AE", "ME", "CS"],
    slug: "computational-laboratory-for-aerodynamics-and-aeroacoustics-research",
    link: "https://sites.google.com/view/claar-gatech",
  },
  {
    name: "Circular Electrochemistry Lab",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, ChemE, MSE.",
    department: "Mechanical Engineering",
    pi: "Hailong Chen",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "ChemE", "MSE"],
    slug: "circular-electrochemistry-lab",
    link: "https://www.circular-electrochemistry-lab.com/",
  },
  {
    name: "Energy Storage and Conversion Laboratory",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, ChemE, MSE.",
    department: "Mechanical Engineering",
    pi: "Seung Woo Lee",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "ChemE", "MSE"],
    slug: "energy-storage-and-conversion-laboratory",
    link: "https://escl.gatech.edu/",
  },
  {
    name: "Flow Physics and Computational Science Lab",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, AE, CS.",
    department: "Mechanical Engineering",
    pi: "Alexander Alexeev",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "AE", "CS"],
    slug: "flow-physics-and-computational-science-lab",
    link: "https://flow.me.gatech.edu/",
  },
  {
    name: "Georgia Tech Cryo Lab",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, AE, Physics.",
    department: "Mechanical Engineering",
    pi: "S. Mostafa Ghiaasiaan",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "AE", "Physics"],
    slug: "georgia-tech-cryo-lab",
    link: "https://gtcryolab.gatech.edu/",
  },
  {
    name: "Micro Nano Devices & Systems Lab",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, ECE, MSE.",
    department: "Mechanical Engineering",
    pi: "Baratunde Cola",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "ECE", "MSE"],
    slug: "micro-nano-devices-systems-lab",
    link: "https://sites.gatech.edu/mindslab/",
  },
  {
    name: "Microelectronics and Emerging Technologies Thermal Lab",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, ECE, MSE.",
    department: "Mechanical Engineering",
    pi: "Yogendra Joshi",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "ECE", "MSE"],
    slug: "microelectronics-and-emerging-technologies-thermal-lab",
    link: "https://mettl.gatech.edu/",
  },
  {
    name: "MISCellaneous Laboratory",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, BME, ChemE.",
    department: "Mechanical Engineering",
    pi: "Andrei Fedorov",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "BME", "ChemE"],
    slug: "miscellaneous-laboratory",
    link: "https://fedorov-lab.gatech.edu/",
  },
  {
    name: "Nanoscale Thermal Radiation Laboratory",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, Physics, MSE.",
    department: "Mechanical Engineering",
    pi: "Zhuomin Zhang",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "Physics", "MSE"],
    slug: "nanoscale-thermal-radiation-laboratory",
    link: "https://zhang-nano.gatech.edu/",
  },
  {
    name: "Shock Tube and Advanced Mixing Laboratory",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, AE, Physics.",
    department: "Mechanical Engineering",
    pi: "Devesh Ranjan",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "AE", "Physics"],
    slug: "shock-tube-and-advanced-mixing-laboratory",
    link: "https://staml.gatech.edu/",
  },
  {
    name: "Solar Fuels and Technology Laboratory",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, ChemE, MSE.",
    department: "Mechanical Engineering",
    pi: "Peter Loutzenhiser",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "ChemE", "MSE"],
    slug: "solar-fuels-and-technology-laboratory",
    link: "https://solarftl.gatech.edu/",
  },
  {
    name: "Scalable Thermal Engineering Lab",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, MSE, ECE.",
    department: "Mechanical Engineering",
    pi: "Shannon Yee",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "MSE", "ECE"],
    slug: "scalable-thermal-engineering-lab",
    link: "https://yeelab.gatech.edu/",
  },
  {
    name: "Sustainable Thermal Systems Laboratory",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, ChemE, EnvE.",
    department: "Mechanical Engineering",
    pi: "Srinivas Garimella",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "ChemE", "EnvE"],
    slug: "sustainable-thermal-systems-laboratory",
    link: "https://stsl.gatech.edu/",
  },
  {
    name: "Water-Energy Research Lab",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, ChemE, EnvE.",
    department: "Mechanical Engineering",
    pi: "Akanksha Menon",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "ChemE", "EnvE"],
    slug: "water-energy-research-lab",
    link: "https://amenonlab.me.gatech.edu/",
  },
  {
    name: "Additive Manufacturing for Bio-Engineering Research Lab",
    description: "Mechanical Engineering lab open to students with backgrounds in ME, BME, MSE.",
    department: "Mechanical Engineering",
    pi: "Chuck Zhang",
    piAvatar: "/buzz/MechE.png",
    image: "/banners/MechE.png",
    tags: ["ME", "BME", "MSE"],
    slug: "additive-manufacturing-for-bio-engineering-research-lab",
    link: "https://amber.gatech.edu/",
  },
  {
    name: "Laboratory for Drug Delivery",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, BME, Biology.",
    department: "Chemical Engineering",
    pi: "Mark Prausnitz",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "BME", "Biology"],
    slug: "laboratory-for-drug-delivery",
    link: "https://drugdelivery.chbe.gatech.edu/",
  },
  {
    name: "Lively Lab",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, MSE, Chemistry.",
    department: "Chemical Engineering",
    pi: "Ryan Lively",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "MSE", "Chemistry"],
    slug: "lively-lab",
    link: "https://lively.chbe.gatech.edu/",
  },
  {
    name: "Walton Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, MSE, Chemistry.",
    department: "Chemical Engineering",
    pi: "Krista Walton",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "MSE", "Chemistry"],
    slug: "walton-group",
    link: "https://walton.chbe.gatech.edu/",
  },
  {
    name: "Jones Research Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, Chemistry, EnvE.",
    department: "Chemical Engineering",
    pi: "Christopher Jones",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "Chemistry", "EnvE"],
    slug: "jones-research-group",
    link: "https://jones.chbe.gatech.edu/",
  },
  {
    name: "Nair Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, MSE, Chemistry.",
    department: "Chemical Engineering",
    pi: "Sankar Nair",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "MSE", "Chemistry"],
    slug: "nair-group",
    link: "https://nair.chbe.gatech.edu/",
  },
  {
    name: "Grover Research Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, CS, MSE.",
    department: "Chemical Engineering",
    pi: "Martha Grover",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "CS", "MSE"],
    slug: "grover-research-group",
    link: "https://grover.chbe.gatech.edu/",
  },
  {
    name: "Wilson Research Laboratory",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, BME, Biology.",
    department: "Chemical Engineering",
    pi: "Corey Wilson",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "BME", "Biology"],
    slug: "wilson-research-laboratory",
    link: "https://wilson.chbe.gatech.edu/",
  },
  {
    name: "Lu Fluidics Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, BME, ME.",
    department: "Chemical Engineering",
    pi: "Hang Lu",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "BME", "ME"],
    slug: "lu-fluidics-group",
    link: "https://www.chbe.gatech.edu/lu-fluidics-group",
  },
  {
    name: "Champion Research Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, BME, Biology.",
    department: "Chemical Engineering",
    pi: "Julie Champion",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "BME", "Biology"],
    slug: "champion-research-group",
    link: "https://champion.chbe.gatech.edu/",
  },
  {
    name: "Kane Research Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, BME, Biology.",
    department: "Chemical Engineering",
    pi: "Ravi Kane",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "BME", "Biology"],
    slug: "kane-research-group",
    link: "https://pwp.gatech.edu/kane-research-group/",
  },
  {
    name: "Peralta-Yahya Lab",
    description: "Chemical Engineering lab open to students with backgrounds in Chemistry, ChemE, Biology.",
    department: "Chemical Engineering",
    pi: "Pamela Peralta-Yahya",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["Chemistry", "ChemE", "Biology"],
    slug: "peralta-yahya-lab",
    link: "https://peraltayahya.gatech.edu/",
  },
  {
    name: "Sievers Research Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, Chemistry, EnvE.",
    department: "Chemical Engineering",
    pi: "Carsten Sievers",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "Chemistry", "EnvE"],
    slug: "sievers-research-group",
    link: "https://sievers.chbe.gatech.edu/",
  },
  {
    name: "Brettmann Research Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, MSE, Chemistry.",
    department: "Chemical Engineering",
    pi: "Blair Brettmann",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "MSE", "Chemistry"],
    slug: "brettmann-research-group",
    link: "https://brettmann.chbe.gatech.edu/",
  },
  {
    name: "Realff Research Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, IE, EnvE.",
    department: "Chemical Engineering",
    pi: "Matthew Realff",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "IE", "EnvE"],
    slug: "realff-research-group",
    link: "https://realff.chbe.gatech.edu/",
  },
  {
    name: "Filler Research Group",
    description: "Chemical Engineering lab open to students with backgrounds in ChemE, MSE, ECE.",
    department: "Chemical Engineering",
    pi: "Michael Filler",
    piAvatar: "/buzz/ChemE.png",
    image: "/banners/ChemE.png",
    tags: ["ChemE", "MSE", "ECE"],
    slug: "filler-research-group",
    link: "https://fillerlab.gatech.edu/",
  },
  {
    name: "Predictive Analytics and Intelligent Systems",
    description: "Industrial Engineering lab open to students with backgrounds in IE, CS, Math.",
    department: "Industrial Engineering",
    pi: "Jianjun Shi",
    piAvatar: "/buzz/IE.png",
    image: "/banners/IE.png",
    tags: ["IE", "CS", "Math"],
    slug: "predictive-analytics-and-intelligent-systems",
    link: "https://pais.scl.gatech.edu/",
  },
  {
    name: "Physical Internet Center",
    description: "Industrial Engineering lab open to students with backgrounds in IE, CS, Supply Chain.",
    department: "Industrial Engineering",
    pi: "Benoit Montreuil",
    piAvatar: "/buzz/IE.png",
    image: "/banners/IE.png",
    tags: ["IE", "CS", "Supply Chain"],
    slug: "physical-internet-center",
    link: "https://www.picenter.gatech.edu/",
  },
  {
    name: "Health Analytics Group",
    description: "Industrial Engineering lab open to students with backgrounds in IE, CS, BME.",
    department: "Industrial Engineering",
    pi: "Pinar Keskinocak",
    piAvatar: "/buzz/IE.png",
    image: "/banners/IE.png",
    tags: ["IE", "CS", "BME"],
    slug: "health-analytics-group",
    link: "https://www.healthanalytics.gatech.edu/",
  },
  {
    name: "Socially Aware Mobility Lab",
    description: "Industrial Engineering lab open to students with backgrounds in IE, CS, CEE.",
    department: "Industrial Engineering",
    pi: "Pascal Van Hentenryck",
    piAvatar: "/buzz/IE.png",
    image: "/banners/IE.png",
    tags: ["IE", "CS", "CEE"],
    slug: "socially-aware-mobility-lab",
    link: "https://sam.isye.gatech.edu/",
  },
  {
    name: "Supply Chain and Logistics Institute",
    description: "Industrial Engineering lab open to students with backgrounds in IE, CS, Supply Chain.",
    department: "Industrial Engineering",
    pi: "Alan Erera, Benoit Montreuil",
    piAvatar: "/buzz/IE.png",
    image: "/banners/IE.png",
    tags: ["IE", "CS", "Supply Chain"],
    slug: "supply-chain-and-logistics-institute",
    link: "https://www.scl.gatech.edu/",
  },
  ];
  const filteredLabs = labs.filter((lab) => {
    const matchesSearch =
      lab.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      lab.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesDepartment = selectedDepartment === 'All' || lab.department === selectedDepartment;
    return matchesSearch && matchesDepartment;
  });
  return (
    <div className="relative w-full min-h-screen bg-black px-6 py-4">
      <IntroChrome/>
      <section className="relative w-full flex items-center justify-center pt-28 py-4">
        <div className="relative w-[90%] max-w-6xl min-h-[100px] max-h-[200px] md:aspect-video md:min-h-0 overflow-hidden">
          <div className="absolute inset-0 border-2 border-dashed border-[#B39051] overflow-hidden z-0">
            <GradientBackground scale={2.5} />
          </div>
          <div className="absolute flex items-center text-center justify-center inset-0">
            <h1
              className="text-white text-3xl md:text-5xl italic font-bold leading-tight"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              Explore Labs
            </h1>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <div className="max-w-6xl mx-auto pt-8">
        <div className="border-2 border-dashed border-[#B39051] rounded-2xl p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 min-w-0 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white/60 w-5 h-5" />
              <input
                type="text"
                placeholder="Search labs..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-3 bg-white/10 border-2 border-white/20 text-white placeholder:text-white/50 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#B39051] focus:border-[#B39051] transition-colors"
              />
            </div>

            <div className="flex gap-2 overflow-x-auto md:max-w-[55%]">
              {departments.map((department) => (
                <button
                  key={department}
                  onClick={() => setSelectedDepartment(department)}
                  className={`px-6 py-3 rounded-xl text-sm whitespace-nowrap transition-all shrink-0 ${
                    selectedDepartment === department
                      ? 'bg-[#B39051] text-[#051E39]'
                      : 'bg-white/5 text-white/70 hover:bg-white/10'
                  }`}
                >
                  {department}
                </button>
              ))}
            </div>
          </div>
        </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-16">
        {filteredLabs.map((lab) => (
          <div
            key={lab.slug}
            className="relative border-2 border-dashed border-[#B39051] rounded-2xl overflow-hidden hover:border-white/60 transition-all duration-300 hover:-translate-y-1 group"
          >
            <button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                addLab({
                  slug: lab.slug,
                  name: lab.name,
                  department: lab.department,
                  pi: lab.pi,
                  link: lab.link,
                });
              }}
              className={`absolute top-4 right-4 z-10 h-8 w-8 flex items-center justify-center rounded-full transition-colors ${
                isInList(lab.slug)
                  ? "bg-[#B39051] text-[#051E39]"
                  : "bg-black/70 text-white hover:bg-[#B39051] hover:text-[#051E39]"
              }`}
            >
              {isInList(lab.slug) ? <Check className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
            </button>

            <a href={lab.link} target="_blank" rel="noopener noreferrer" className="block no-underline">
              <div className="relative h-48 overflow-hidden bg-white/5 flex items-center justify-center p-4">
                <img
                  src={lab.image}
                  alt={lab.name}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-black/80 backdrop-blur-sm text-[#B39051] px-3 py-1 rounded-full text-xs font-semibold">
                    {lab.department}
                  </span>
                </div>
              </div>

              <div className="p-6">
                <h2
                  className="text-xl italic font-bold text-white mb-3 group-hover:text-[#B39051] transition-colors line-clamp-2"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  {lab.name}
                </h2>
                <p className="text-white/50 mb-4 line-clamp-3 text-sm">{lab.description}</p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {lab.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="flex items-center gap-1 text-xs text-white/60 bg-white/5 px-2 py-1 rounded-md"
                    >
                      <Tag className="w-3 h-3" />
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex items-center justify-between pt-4 border-t border-white/10">
                  <div className="flex items-center gap-3">
                    <img src={lab.piAvatar} alt={lab.pi} className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-medium text-white/80">{lab.pi}</span>
                  </div>
                  <div className="flex items-center gap-1 text-xs text-white/40">
                    <Users className="w-3 h-3" />
                    Hiring
                  </div>
                </div>

                <div className="mt-4 flex items-center gap-2 text-[#B39051] text-sm font-semibold">
                  View lab
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>

        {filteredLabs.length === 0 && (
          <div className="text-center py-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-white/5 rounded-full mb-4">
              <Search className="w-8 h-8 text-white/40" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">No labs found</h3>
            <p className="text-white/50">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>

      {/*FOOTER*/}
      <footer className="relative w-full bg-black px-6 md:px-16 py-16">
            <div className="max-w-6xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
                {/* Logo */}
                <span
                  className="pl-2 pr-1 text-lg font-semibold italic tracking-tight text-white"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  LabLink
                </span>
      
                {/* Link columns */}
                <div className="flex flex-wrap gap-16">
                  {Object.entries(FOOTER_LINKS).map(([category, links]) => (
                    <div key={category} className="flex flex-col gap-4">
                      <h4 className="text-white font-semibold text-sm">{category}</h4>
                      {links.map((link) => (
                        <a
                          key={link.label}
                          href={link.href}
                          className="text-white/40 hover:text-white/70 transition-colors text-xs"
                        >
                          {link.label}
                        </a>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
      
              <div className="border-t-2 border-dashed border-[#B39051] pt-8">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="text-white/40 text-xs flex flex-col gap-1">
                    <p>Copyright © 2026 LabLink.</p>
                    <p>All rights reserved.</p>
                  </div>
      
                  <div className="flex items-center gap-4">
                    <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                      <FaLinkedin className="h-5 w-5" />
                    </a>
                    <a href="#" className="text-white/40 hover:text-white/70 transition-colors">
                      <FaGithub className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
      </footer>
    </div>
  );
}