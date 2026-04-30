import os
import glob
import re
import json

faqs_data = {
    'AISolutionsHero.tsx': [
        {"question": "What types of AI solutions do you build?", "answer": "We build LLM applications, generative AI tools, AI chatbots, machine learning models, predictive analytics systems, and AI automation pipelines for startups and enterprises."},
        {"question": "How long does an AI development project take?", "answer": "Most AI projects range from 4 to 12 weeks depending on complexity, data availability, and integration requirements."},
        {"question": "Do you work with startups or only large enterprises?", "answer": "We work with both. Many of our clients are early-stage startups building their first AI product, as well as mid-size companies adding AI to existing systems."},
        {"question": "What is your development process for AI projects?", "answer": "We start with a discovery session to understand your goals, then assess your data, design the AI architecture, build and test the model, and deploy it to production with ongoing monitoring."}
    ],
    'WebDataExtractionHero.tsx': [
        {"question": "Is web scraping legal?", "answer": "Web scraping of publicly available data is generally legal. We follow ethical scraping practices, respect robots.txt files, and avoid scraping private or login-protected data."},
        {"question": "What formats can you deliver scraped data in?", "answer": "We deliver data as CSV, JSON, Excel, or directly into your database or API endpoint. We can also set up automated scheduled delivery."},
        {"question": "Can you scrape websites that require login or have anti-bot protection?", "answer": "Yes. We have experience handling CAPTCHAs, rate limiting, JavaScript-rendered pages, and session-based authentication using ethical proxy and browser automation techniques."},
        {"question": "How accurate is your scraped data?", "answer": "We implement automated validation and cleaning pipelines to ensure 99%+ accuracy. Data is cross-checked before delivery."}
    ],
    'CustomSoftwareHero.tsx': [
        {"question": "What is custom software development?", "answer": "Custom software is built specifically for your business needs, unlike off-the-shelf tools. It gives you full control over features, integrations, and scalability."},
        {"question": "How much does custom software development cost?", "answer": "Costs vary based on scope. Simple web applications start around ₹1.5–3L. Complex enterprise systems with integrations can range from ₹5L to ₹20L+. We provide a detailed estimate after a free discovery call."},
        {"question": "Do you provide post-launch support?", "answer": "Yes. We offer flexible maintenance and support packages after launch to handle bug fixes, updates, and feature additions."}
    ],
    'WebDevelopmentHero.tsx': [
        {"question": "What technologies do you use for web development?", "answer": "We primarily use React, Next.js, Node.js, and TypeScript for front-end and back-end development, with PostgreSQL or MongoDB for databases."},
        {"question": "Can you rebuild my existing website?", "answer": "Yes. We handle full website migrations, redesigns, and performance overhauls for existing businesses."}
    ],
    'MobileDevelopmentHero.tsx': [
        {"question": "Do you build for iOS or Android?", "answer": "We build for both! We use cross-platform technologies like React Native and Flutter, as well as native Swift and Kotlin depending on the project requirements."},
        {"question": "How long does it take to build a mobile app?", "answer": "A typical MVP takes 8 to 12 weeks, while more complex apps with custom backend integrations can take 3 to 6 months."},
        {"question": "Will you help us launch on the App Store and Google Play?", "answer": "Yes, we handle the entire submission and review process for both Apple App Store and Google Play Store to ensure a smooth launch."}
    ],
    'UIUXDevelopmentHero.tsx': [
        {"question": "Do you offer UI/UX design as a standalone service?", "answer": "Yes. We can design your digital product from scratch or redesign your existing application without taking on the development phase, if that's what you need."},
        {"question": "What tools do you use for design?", "answer": "Our primary design tool is Figma. We use it for wireframing, high-fidelity UI design, and interactive prototyping."},
        {"question": "How do you ensure the design aligns with our brand?", "answer": "We start every project with a thorough discovery phase to understand your brand guidelines, target audience, and business objectives before creating any visual assets."}
    ],
    'DataPreprocessingHero.tsx': [
        {"question": "What is data preprocessing and why is it important?", "answer": "Data preprocessing involves cleaning and organizing raw data into a structured format. It's a critical first step for any machine learning or AI project to ensure accurate and reliable models."},
        {"question": "Can you handle large, messy datasets?", "answer": "Absolutely. We have robust pipelines designed to handle gigabytes to terabytes of raw, unstructured data efficiently."},
        {"question": "Do you offer data annotation services?", "answer": "Yes, we provide data labeling and annotation for computer vision, NLP, and other supervised machine learning tasks."}
    ],
    'MobileAppScrapingHero.tsx': [
        {"question": "How is mobile app scraping different from web scraping?", "answer": "Mobile apps use different APIs and security protocols than websites. We use specialized tools to intercept and analyze app traffic or automate emulators to extract the data."},
        {"question": "Is mobile app scraping reliable?", "answer": "Yes, once our pipelines are configured to handle app updates and API changes, the data extraction is highly reliable and can run on an automated schedule."},
        {"question": "Can you scrape data from any app?", "answer": "We can scrape publicly accessible data from most apps, provided we follow ethical guidelines and the app doesn't employ extreme, targeted anti-scraping measures."}
    ],
    'BusinessSoftwareConsultingHero.tsx': [
        {"question": "What does a software consultant do?", "answer": "We analyze your current business processes, identify technological gaps, and recommend or build the right software solutions to automate and scale your operations."},
        {"question": "Do you help with digital transformation?", "answer": "Yes, we specialize in guiding traditional businesses through digital transformation, implementing tools like ERPs, CRMs, and custom automation scripts."},
        {"question": "We have an existing tech team. Can you work with them?", "answer": "Absolutely. We frequently consult with internal tech teams, offering architectural guidance, code reviews, and strategic planning."}
    ],
    'LLMServiceHero.tsx': [
        {"question": "What is LLM development?", "answer": "Large Language Model (LLM) development involves fine-tuning or integrating AI models like GPT-4, Llama 3, or Claude into your applications to understand and generate human-like text."},
        {"question": "Can you train an LLM on my company's private data?", "answer": "Yes. We specialize in Retrieval-Augmented Generation (RAG) and model fine-tuning to create AI assistants that are experts on your proprietary data while keeping it secure."},
        {"question": "How do you ensure data privacy when using LLMs?", "answer": "We deploy models on secure cloud infrastructure or on-premise servers and ensure that your private data is never used to train public models."}
    ]
}

related_data = {
    'AISolutionsHero.tsx': [
        {"title": "Web Scraping", "href": "/services/web-scraping-services", "description": "Extract structured data from the web at scale."},
        {"title": "Data Preprocessing", "href": "/services/data-preprocessing", "description": "Clean and structure data for machine learning models."},
        {"title": "Custom Software", "href": "/services/custom-software-development", "description": "Build scalable, custom web applications and SaaS products."}
    ],
    'WebDataExtractionHero.tsx': [
        {"title": "Data Preprocessing", "href": "/services/data-preprocessing", "description": "Clean and structure data for machine learning models."},
        {"title": "AI Solutions", "href": "/services/ai-solutions", "description": "Leverage your data with custom AI and LLM solutions."},
        {"title": "Mobile Scraping", "href": "/services/mobile-scraping", "description": "Extract valuable data directly from mobile applications."}
    ],
    'CustomSoftwareHero.tsx': [
        {"title": "Web Development", "href": "/services/web-development", "description": "Scalable web applications and platforms."},
        {"title": "Mobile Development", "href": "/services/mobile-development", "description": "Cross-platform iOS and Android applications."},
        {"title": "UI/UX Design", "href": "/services/ui-ux-design", "description": "User-centered design that improves conversion rates."}
    ],
    'WebDevelopmentHero.tsx': [
        {"title": "Custom Software", "href": "/services/custom-software-development", "description": "Build scalable, custom web applications and SaaS products."},
        {"title": "Mobile Development", "href": "/services/mobile-development", "description": "Cross-platform iOS and Android applications."}
    ],
    'MobileDevelopmentHero.tsx': [
        {"title": "Web Development", "href": "/services/web-development", "description": "Scalable web applications and platforms."},
        {"title": "UI/UX Design", "href": "/services/ui-ux-design", "description": "User-centered design that improves conversion rates."}
    ],
    'UIUXDevelopmentHero.tsx': [
        {"title": "Web Development", "href": "/services/web-development", "description": "Scalable web applications and platforms."},
        {"title": "Mobile Development", "href": "/services/mobile-development", "description": "Cross-platform iOS and Android applications."}
    ],
    'DataPreprocessingHero.tsx': [
        {"title": "Web Scraping", "href": "/services/web-scraping-services", "description": "Extract structured data from the web at scale."},
        {"title": "AI Solutions", "href": "/services/ai-solutions", "description": "Leverage your data with custom AI and LLM solutions."}
    ],
    'MobileAppScrapingHero.tsx': [
        {"title": "Web Scraping", "href": "/services/web-scraping-services", "description": "Extract structured data from the web at scale."},
        {"title": "Data Preprocessing", "href": "/services/data-preprocessing", "description": "Clean and structure data for machine learning models."}
    ],
    'BusinessSoftwareConsultingHero.tsx': [
        {"title": "Custom Software", "href": "/services/custom-software-development", "description": "Build scalable, custom web applications and SaaS products."},
        {"title": "AI Solutions", "href": "/services/ai-solutions", "description": "Leverage your data with custom AI and LLM solutions."}
    ],
    'LLMServiceHero.tsx': [
        {"title": "AI Solutions", "href": "/services/ai-solutions", "description": "Leverage your data with custom AI and LLM solutions."},
        {"title": "Data Preprocessing", "href": "/services/data-preprocessing", "description": "Clean and structure data for machine learning models."}
    ]
}


files = glob.glob('app/Pages/Services/*/*Hero.tsx')

for file in files:
    filename = os.path.basename(file)
    with open(file, 'r') as f:
        content = f.read()

    # Skip if already added
    if 'FAQ' in content and 'RelatedServices' in content:
        continue

    # Add imports
    import_statements = 'import FAQ from "../../../Components/FAQ/FAQ";\nimport RelatedServices from "../../../Components/RelatedServices/RelatedServices";\n'
    last_import_idx = content.rfind('import ')
    end_of_last_import = content.find('\n', last_import_idx) + 1
    content = content[:end_of_last_import] + import_statements + content[end_of_last_import:]

    # Get data
    faqs = faqs_data.get(filename, [])
    related = related_data.get(filename, [])
    
    # Generate constant declarations
    faq_code = f"\n  const faqs = {json.dumps(faqs, indent=4)};\n"
    related_code = f"\n  const relatedServices = {json.dumps(related, indent=4)};\n"
    
    # Insert variables inside the functional component
    # We find the definition: const SomeHero = () => { or const SomeHero: React.FC = () => {
    func_match = re.search(r'const\s+[a-zA-Z0-9_]+\s*(:\s*React\.FC)?\s*=\s*\([^)]*\)\s*=>\s*\{', content)
    if func_match:
        insert_pos = func_match.end()
        content = content[:insert_pos] + faq_code + related_code + content[insert_pos:]
    else:
        # try function SomeHero() {
        func_match = re.search(r'export default function\s+[a-zA-Z0-9_]+\s*\([^)]*\)\s*\{', content)
        if func_match:
            insert_pos = func_match.end()
            content = content[:insert_pos] + faq_code + related_code + content[insert_pos:]

    # Insert the components right after <ServiceExpectations />
    insertion_block = """
      <RelatedServices services={relatedServices} />
      <hr />
      <FAQ items={faqs} />
      <hr />
"""
    
    content = content.replace('<ServiceExpectations />', f'<ServiceExpectations />{insertion_block}')

    with open(file, 'w') as f:
        f.write(content)
    print(f"Added FAQ and RelatedServices to {file}")
