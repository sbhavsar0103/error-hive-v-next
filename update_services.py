import os
import glob
import re

files = glob.glob('app/Pages/Services/*/*Hero.tsx')

for file in files:
    with open(file, 'r') as f:
        content = f.read()

    if 'ServiceExpectations' in content:
        continue

    # Add import
    import_statement = 'import ServiceExpectations from "../../../Components/ServiceExpectations/ServiceExpectations";\n'
    # Insert after last import
    last_import_idx = content.rfind('import ')
    end_of_last_import = content.find('\n', last_import_idx) + 1
    content = content[:end_of_last_import] + import_statement + content[end_of_last_import:]

    # Find the closing tag (</> or </section>)
    closing_tags = [m for m in re.finditer(r'(</>|</section>)', content)]
    if closing_tags:
        last_closing_tag = closing_tags[-1]
        
        # We want to insert ServiceExpectations before the last component.
        # Let's find the last component tag like <SomeComponent /> before the last closing tag.
        # It's usually preceded by <hr />
        
        # Actually, let's insert it right before the last component.
        # We can look for the last `<hr />` that is followed by a component.
        # A simpler way: Find the last `<hr />` before the closing tag, and then find the `<hr />` before that!
        
        # Or even simpler: user says "Before the final CTA section on each service page".
        # Let's just insert it before the very last component before the closing tag.
        
        # Let's use regex to find the last component: <[A-Z][a-zA-Z0-LL]* /> or something similar.
        # We will split the content by lines, iterate from bottom to top, find the first line with a component <... />, and insert before it.
        lines = content.split('\n')
        insert_idx = -1
        for i in range(len(lines) - 1, -1, -1):
            if re.search(r'<[A-Z][a-zA-Z0-9]*\s*(/>|.*?>)', lines[i]) and not 'ServiceExpectations' in lines[i]:
                # Found the last component
                insert_idx = i
                break
        
        if insert_idx != -1:
            # If the previous line is <hr />, insert before the <hr />
            if i > 0 and '<hr />' in lines[i-1]:
                insert_idx = i - 1
                
            lines.insert(insert_idx, '      <ServiceExpectations />\n      <hr />')
            
            with open(file, 'w') as f:
                f.write('\n'.join(lines))
            print(f"Updated {file}")
        else:
            print(f"Could not find insert point in {file}")

