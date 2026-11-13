"""Generate safe, complete portfolio sections from the archived original homepage."""
from html.parser import HTMLParser
from html import escape
from urllib.parse import urljoin, urlparse, unquote
from pathlib import Path
import json, re
BASE='https://jasmineyliang.github.io/'
class N:
 def __init__(self,t='',a=()):self.tag=t;self.attrs=dict(a);self.children=[]
class P(HTMLParser):
 def __init__(self):super().__init__();self.root=N();self.stack=[self.root]
 def handle_starttag(self,t,a):
  n=N(t,a);self.stack[-1].children.append(n)
  if t not in {'img','br','hr','meta','link','input','source','wbr'}:self.stack.append(n)
 def handle_endtag(self,t):
  for i in range(len(self.stack)-1,0,-1):
   if self.stack[i].tag==t:self.stack=self.stack[:i];break
 def handle_startendtag(self,t,a):self.handle_starttag(t,a);self.handle_endtag(t)
 def handle_data(self,s):self.stack[-1].children.append(s)
def walk(n):
 if isinstance(n,N):
  yield n
  for c in n.children:yield from walk(c)
def text(n):return n if isinstance(n,str) else ''.join(text(c) for c in n.children)
def clean(s):return re.sub(r'\s+',' ',s).strip()
def render(n):
 if isinstance(n,str):return escape(n)
 t=n.tag;a=n.attrs
 if t in {'script','style','nav','footer','hr'}:return ''
 content=''.join(render(c) for c in n.children)
 if t=='img':
  src=urljoin(BASE,a.get('src',''))
  if 'img.shields.io' in src:
   label=unquote(urlparse(src).path).split('/badge/')[-1]
   label=re.sub(r'-(?:white|blue|green|red|orange|yellow|black|grey|gray|[0-9a-fA-F]{6})$','',label).replace('_',' ')
   return '<span class="archive-badge">'+escape(label)+'</span>'
  return '<img loading="lazy" src="'+escape(src,quote=True)+'" alt="'+escape(a.get('alt') or 'Project research figure',quote=True)+'" />'
 if t=='a':
  href=a.get('href','')
  if not href or href=='#':return content
  href=urljoin(BASE,href)
  if not href.startswith(('https://','http://')):return content
  if '[https:' in href:
   href='https://github.com/jasmineyliang/OOP/tree/main/project4'
  return '<a href="'+escape(href,quote=True)+'" target="_blank" rel="noreferrer">'+content+'</a>'
 if t=='br':return '<br />'
 if t in {'h3','h4','h5','p','ul','ol','li','strong','em','b','i','blockquote','div'}:return '<'+t+'>'+content+'</'+t+'>'
 return content
p=P();p.feed(Path('documentation/original-portfolio/source-2026-11-05.html').read_text())
section=next(n for n in walk(p.root) if n.tag=='section')
parts=[]
for n in section.children:
 if isinstance(n,N) and n.tag=='h2':parts.append({'title':clean(text(n)),'nodes':[]})
 elif parts:parts[-1]['nodes'].append(n)
data=[]
for part in parts:
 nodes=part['nodes'];groups=[];intro=[]
 for n in nodes:
  if isinstance(n,N) and n.tag=='h3':groups.append({'title':clean(text(n)),'nodes':[]})
  elif groups:groups[-1]['nodes'].append(n)
  else:intro.append(n)
 data.append({'title':part['title'],'intro':''.join(render(n) for n in intro),'groups':[{'title':g['title'],'html':''.join(render(n) for n in g['nodes'])} for g in groups]})
header=next(n for n in walk(p.root) if n.tag=='header')
profile=''.join(render(n) for n in header.children if not isinstance(n,N) or n.tag!='h1')
Path('app/data/original-portfolio.json').write_text(json.dumps({'sections':data,'profile':profile},ensure_ascii=False,indent=2))
# Coverage checks: all original content text within the section must survive generation.
result=P();result.feed(''.join(x['title']+x['intro']+''.join(g['title']+g['html'] for g in x['groups']) for x in data))
normalized=clean(text(result.root))
leaves=[clean(n) for el in walk(section) for n in el.children if isinstance(n,str) and clean(n)]
navigation={'AI FOR BUSINESS','SKILL-BASED PROJECTS','AI & RESEARCH','HONORS & AWARDS','PAPERS'}
missing=[s for s in leaves if s not in normalized and s not in navigation]
assert not missing, missing
print('Preserved all',len(leaves),'original text fragments across',len(data),'sections.')
print([(x['title'],len(x['groups'])) for x in data])
