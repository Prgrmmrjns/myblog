---
title: How Large Language Models can help with the diagnosis of Rare Diseases
date: 03/03/2025
description: In the complex world of medical diagnostics, rare diseases present
  unique challenges due to their uncommon nature and often puzzling symptoms.
  Large Language Models (LLMs) are emerging as powerful tools that can analyze
  vast medical literature, recognize subtle symptom patterns, and assist
  healthcare professionals in identifying these elusive conditions, potentially
  reducing the years-long diagnostic odyssey many patients endure.
tags:
  - Machine Learning
  - Rare Diseases
  - Diagnosis
image: /articles/llms-rare-diseases-cover.png
readingTime: "10"
---

![preview](/articles/llms-rare-diseases-cover.png)

## What are Rare Diseases?

Rare diseases represent a significant challenge in modern healthcare, affecting fewer than 1 in 2,000 people in Europe or fewer than 200,000 Americans total (1). While each condition is individually uncommon, collectively they impact approximately 300 million people worldwide across more than 7,000 distinct disorders (1). This paradox creates a substantial healthcare burden where individual diseases lack sufficient research attention, yet their combined impact affects roughly 10% of the global population.

The definition of "rare" varies by jurisdiction, but the underlying challenge remains consistent: limited clinical experience, sparse research funding, and insufficient therapeutic development. Most rare diseases are genetic in origin, with 80% having an identified genetic component, and many manifest early in life with 75% affecting children (1).

## Ehlers Danlos Syndrome, a curious example

Ehlers-Danlos Syndrome (EDS) exemplifies the diagnostic challenges inherent in rare disease medicine. This group of 13 connective tissue disorders affects approximately 1 in 5,000 individuals, with hypermobile EDS (hEDS) being the most prevalent subtype (2). The syndrome is characterized by joint hypermobility, skin hyperextensibility, and tissue fragility.

Clinical manifestations include:

- Generalized joint hypermobility leading to frequent dislocations
- Chronic musculoskeletal pain and fatigue
- Skin that is soft, velvety, and prone to easy bruising
- Cardiovascular complications in certain subtypes
- Gastrointestinal dysfunction

The diagnostic journey for EDS patients averages 10-12 years, involving multiple specialist consultations and often misdiagnoses (2). This delay stems from the syndrome's variable presentation and overlap with more common conditions such as fibromyalgia or benign joint hypermobility.

## The problem with diagnosing rare diseases

The diagnostic process for rare diseases faces several systemic challenges that contribute to delayed or missed diagnoses:

**Limited Clinical Exposure**
Healthcare providers encounter rare diseases infrequently, making pattern recognition difficult. Medical education typically allocates minimal time to rare disease instruction, with most curricula focusing on common conditions that physicians will encounter regularly.

**Complex Symptomatology**
Rare diseases often present with multisystem involvement and nonspecific symptoms that can mimic more common conditions. This complexity leads to a phenomenon known as "diagnostic odyssey," where patients undergo extensive testing and multiple specialist consultations before receiving an accurate diagnosis.

**Knowledge Fragmentation**
Medical knowledge about rare diseases is scattered across specialized literature, case reports, and expert networks. No single physician can maintain current knowledge across all rare conditions, creating gaps in diagnostic capability.

**Resource Constraints**
Healthcare systems are optimized for common conditions, with diagnostic protocols and decision-support tools primarily designed for prevalent diseases. This creates systematic bias against rare disease recognition.

## AI to the rescue

Large Language Models represent a paradigm shift in medical decision support, offering unprecedented access to comprehensive medical knowledge. These systems have demonstrated remarkable capabilities in medical reasoning, with recent models achieving performance comparable to medical professionals on standardized examinations (3).

Key advantages of LLMs in medical applications include:

- **Comprehensive Knowledge Integration**: LLMs can process and synthesize information from millions of medical publications, case reports, and clinical guidelines simultaneously
- **Pattern Recognition**: Advanced neural architectures excel at identifying subtle patterns across complex, multidimensional data
- **Accessibility**: These tools can provide expert-level medical reasoning to healthcare providers regardless of their location or specialization
- **Continuous Learning**: Models can be updated with new medical knowledge as it becomes available

Recent developments have shown promising results, with GPT-4 achieving 86% accuracy on the United States Medical Licensing Examination and specialized medical LLMs demonstrating expert-level performance on clinical reasoning tasks (3).

## How LLMs can help with the diagnosis of rare diseases

Large Language Models offer several specific advantages for rare disease diagnosis:

**Comprehensive Differential Diagnosis Generation**
LLMs can rapidly generate extensive differential diagnoses by analyzing patient presentations against their vast knowledge base of rare conditions. This capability is particularly valuable when symptoms span multiple organ systems or present in atypical patterns.

**Literature Synthesis and Case Matching**
These models can instantly access and synthesize information from thousands of published case reports, identifying similar presentations and potential diagnostic pathways. This capability effectively democratizes access to specialized knowledge that might otherwise require consultation with rare disease experts.

**Multilingual Medical Knowledge Access**
LLMs can process medical literature published in multiple languages, potentially uncovering relevant cases or research that might be missed due to language barriers. This is particularly important for rare diseases, where every documented case contributes valuable diagnostic information.

**Clinical Decision Support**
Advanced LLMs can provide structured diagnostic reasoning, suggesting appropriate investigations, specialist referrals, and monitoring strategies based on suspected rare conditions. This guidance can help generalist physicians navigate complex diagnostic pathways more effectively.

**Real-world Applications**
Several documented cases demonstrate LLM effectiveness in rare disease diagnosis. Researchers have reported successful diagnosis of complex cases using ChatGPT, including instances where traditional diagnostic approaches had failed for extended periods (4). Additionally, AI systems have shown promise in identifying rare genetic disorders through facial phenotype analysis and clinical feature matching (5).

## The future of rare disease diagnosis

The integration of LLMs into clinical practice promises significant advances in rare disease diagnosis:

**Personalized Diagnostic Assistance**
Future systems may provide real-time diagnostic support integrated into electronic health records, continuously analyzing patient data and alerting clinicians to potential rare disease presentations. This proactive approach could significantly reduce diagnostic delays.

**Enhanced Clinical Decision Making**
Advanced LLMs may combine multiple data sources including clinical notes, laboratory results, imaging studies, and genetic information to provide comprehensive diagnostic assessments. This multimodal approach could improve diagnostic accuracy while reducing unnecessary testing.

**Global Knowledge Networks**
LLMs could facilitate the creation of global rare disease networks, connecting patients with similar presentations and enabling collaborative diagnosis across geographic boundaries. This connectivity could be particularly valuable for ultra-rare conditions with limited documented cases.

**Predictive Diagnostics**
Future applications may include predictive modeling to identify patients at risk for rare diseases before symptom onset, enabling earlier intervention and improved outcomes.

**Challenges and Considerations**
Despite their promise, LLMs face several challenges in clinical implementation:

- Ensuring diagnostic accuracy and preventing AI hallucinations
- Maintaining patient privacy and data security
- Integrating AI recommendations with clinical judgment
- Addressing potential biases in training data
- Establishing regulatory frameworks for AI-assisted diagnosis

## Conclusion

Large Language Models represent a transformative technology for rare disease diagnosis, offering the potential to significantly reduce diagnostic delays and improve patient outcomes. By providing healthcare professionals with comprehensive access to medical knowledge and advanced pattern recognition capabilities, LLMs can help bridge the gap between rare disease complexity and clinical expertise.

While challenges remain in implementation and validation, the evidence suggests that AI-assisted diagnosis will become an essential tool in rare disease medicine. The integration of human clinical expertise with AI capabilities promises a future where no patient's condition is too rare to diagnose accurately and promptly.

Success in this endeavor will require continued collaboration between clinicians, researchers, and technology developers to ensure that these powerful tools are implemented safely and effectively in clinical practice.

## References

1. Nguengang Wakap, S., et al. "Estimating cumulative point prevalence of rare diseases: analysis of the Orphanet database." European Journal of Human Genetics, 28(2), 165-173 (2020).

2. Malfait, F., et al. "The 2017 international classification of the Ehlers-Danlos syndromes." American Journal of Medical Genetics Part C, 175(1), 8-26 (2017).

3. Singhal, K., et al. "Large language models encode clinical knowledge." Nature, 620(7972), 172-180 (2023).

4. Lee, P., et al. "Benefits, limits, and risks of GPT-4 as an AI chatbot for medicine." New England Journal of Medicine, 388(13), 1233-1239 (2023).

5. Gurovich, Y., et al. "Identifying facial phenotypes of genetic disorders using deep learning." Nature Medicine, 25(1), 60-64 (2019).
