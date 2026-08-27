# 정승한 | IDEA LAB Researcher

IDEA LAB 연구 포트폴리오 사이트입니다. AI 에이전트를 활용한 CFD 워크플로 데모와
스터디 자료를 공개합니다.

**https://seunghanjung.github.io/**

## 구성

- `index.html` — 사이트 전체 (스타일·스크립트 인라인, 빌드 불필요)
- `public/hanyang-logo.png` — 한양대학교 마크 (원본은 불투명 png였고, 테두리에서
  연결된 흰 배경만 투명 처리함. 원 안쪽 글자의 흰색은 보존)
- `public/idea-lab-logo.png` — 연구실 로고 (투명 배경, 여백 크롭 완료)
- `public/seunghan-jung.jpg` — 프로필 사진 (900×1200으로 축소한 웹용 사본)
- `public/demos/salome-meshing-agent.mp4` — 연구 데모 영상 (SALOME 메싱 에이전트)
- `study/*.pdf` — 스터디 자료 6건 (Chapter 3/4/5/7/8, PCA & MLE)

원본 해상도의 사진과 로고는 `.gitignore` 처리되어 로컬에만 있습니다. 사이트가
불러오는 것은 `public/`의 최적화 사본입니다.

## 로컬에서 보기

`index.html`을 브라우저로 바로 열면 됩니다. 별도 서버나 빌드 과정이 없습니다.

## 배포

저장소 이름이 `seunghanJung.github.io`라 GitHub Pages의 **user site**로 동작합니다.
경로 없이 계정 루트 주소로 서비스되는 형태입니다. Source는 `main` 브랜치의
`/ (root)`이고, 루트의 `.nojekyll`이 Jekyll 전처리를 건너뛰게 합니다.

```bash
git add -A; if ($?) { git commit -m "메시지" }; if ($?) { git push }
```

push 후 20~30초면 반영됩니다. 브라우저가 이전 사본을 들고 있는 경우가 잦으니
확인할 때는 Ctrl+Shift+R로 새로고침하세요.

> 이전 주소 `snowfalling-master.github.io/snowfall/`은 계정·저장소 이름을 바꾸면서
> 404가 되었습니다.

## 색상 팔레트

| 변수 | 값 | 용도 |
| --- | --- | --- |
| `--accent` | `#0f52ba` | 사파이어 — 강조 텍스트, 티커, 배지, 현재 챕터 |
| `--ink` | `#0f213d` | 딥 네이비 — 본문, 데모 패널, 네임플레이트, footer 배경 |
| `--acid` | `#f0c14b` | 골드 — 포인트 (마이크로 라벨, 티커 구분 기호) |
| `--ivory` / `--line` | `#fdfbf6` / `#e2dfd6` | 종이 톤 배경과 구분선 |
| `--muted` | `#6b7484` | 보조 텍스트 |

한양대 마크의 남색과 IDEA LAB 로고의 `#004483`이 사파이어 계열 안에 들어와
헤더에서 팔레트가 어긋나지 않습니다.

## 편집 시 유의할 점

- 본문 기준 글자 크기는 16px입니다. 지도 피드백에서 "폰트가 전반적으로 작다"는
  지적을 받아 13~14px에서 올린 값이라, 다시 낮추지 않는 편이 좋습니다.
- 데모 챕터 버튼(01/02/03)은 클릭 가능해 보여야 한다는 피드백에 따라 테두리,
  hover 시 상승, `▶ PLAY` / `NOW PLAYING` 표시를 넣었습니다.
- 긴 한국어 문단에는 `word-break: keep-all`과 `text-wrap: pretty`를 함께 씁니다.
  마지막 줄에 단어가 하나만 남는 것을 막기 위한 설정입니다.
- 스터디 카드에는 다운로드 버튼이 없습니다. `열기 ↗` 하나만 있으므로, 안내
  문구에 "내려받기"를 다시 넣지 마세요.
- 데모는 영상 하나만 두는 구조입니다. `.demo-video-shell`의 `aspect-ratio`가
  현재 영상 해상도(1910×898)에 맞춰져 있으니, 다른 영상으로 바꾸면 그 값도 함께
  고쳐야 합니다. 그러지 않으면 위아래에 검은 여백이 생깁니다.

## 참고

이 저장소에는 별개의 Vite/Cloudflare Workers 실험 코드(`app/`, `worker/`, `db/`)가
함께 있습니다. 공개되는 사이트는 루트의 `index.html` 정적 페이지입니다.
