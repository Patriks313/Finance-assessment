b=open('questions.js').read()
for src,dst in [('form.src.html','assessment_form.html'),('summary.src.html','assessment_summary.html')]:
    open(dst,'w').write(open(src).read().replace('/*BANK*/',b))
print('built')
